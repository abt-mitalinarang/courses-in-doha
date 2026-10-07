import { env } from "@repo/env"
import API_ENDPOINTS from "./endpoints"

interface RequestOptions extends RequestInit {
  headers?: Record<string, string>
  params?: Record<string, string | number | boolean>
}

interface IApiClientConfig {
  baseUrl?: string
  defaultHeaders?: Record<string, string>
  excludedAuthRoutes?: string[]
}

export class ApiClient {
  private baseUrl: string
  private defaultHeaders: Record<string, string>
  private excludedAuthRoutes: string[]
  private isRefreshing: boolean = false
  private refreshPromise: Promise<boolean> | null = null

  constructor(config: IApiClientConfig = {}) {
    this.baseUrl = (config.baseUrl || "").replace(/\/$/, "")
    this.excludedAuthRoutes = config.excludedAuthRoutes || [
      "/auth/login",
      "/auth/register",
    ]

    this.defaultHeaders = {
      "Content-Type": "application/json",
      ...config.defaultHeaders,
    }
  }

  private isExcludedRoute(endpoint: string): boolean {
    const cleanEndpoint = endpoint?.startsWith("/") ? endpoint : `/${endpoint}`
    return this.excludedAuthRoutes?.some((route) =>
      cleanEndpoint?.startsWith(route)
    )
  }

  private async handleRefresh(): Promise<boolean> {
    if (this.isRefreshing && this.refreshPromise) {
      return this.refreshPromise
    }

    this.isRefreshing = true
    this.refreshPromise = new Promise(async (resolve) => {
      try {
        const url = `${this.baseUrl}${API_ENDPOINTS.admin.refreshAdminToken}`
        const response = await fetch(url, {
          method: "GET",
          headers: this.defaultHeaders,
          credentials: "include",
        })

        if (!response.ok) {
          resolve(false)
        } else {
          resolve(true)
        }
      } catch (error) {
        resolve(false)
      } finally {
        this.isRefreshing = false
        this.refreshPromise = null
      }
    })

    return this.refreshPromise
  }

  private async request<T>(
    endpoint: string,
    options: RequestOptions = {},
    isRetry = false
  ): Promise<T> {
    const { params, headers, ...customConfig } = options
    let url = `${this.baseUrl}${endpoint?.startsWith("/") ? endpoint : `/${endpoint}`}`
    if (params && Object.keys(params).length > 0) {
      const searchParams = new URLSearchParams(
        Object.entries(params).map(([k, v]) => [k, String(v)])
      )
      url += `?${searchParams.toString()}`
    }

    const requestHeaders: Record<string, string> = {
      ...this.defaultHeaders,
      ...headers,
    }

    if (this.isExcludedRoute(endpoint)) {
      requestHeaders["Package-Name"] = "shop.optiecommerce2026.admin"
    }

    const config: RequestInit = {
      ...customConfig,
      headers: requestHeaders,
      credentials: "include",
    }

    try {
      const response = await fetch(url, config)

      if (
        response.status === 401 &&
        !isRetry &&
        !this.isExcludedRoute(endpoint)
      ) {
        const refreshed = await this.handleRefresh()
        if (refreshed) {
          return this.request<T>(endpoint, options, true)
        }
      }

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(
          errorData.message ||
            `HTTP Error ${response.status}: ${response.statusText}`
        )
      }

      if (response.status === 204) {
        return {} as T
      }

      return (await response.json()) as T
    } catch (error) {
      console.error(
        `API Request Failed: ${options.method || "GET"} ${url}`,
        error
      )

      throw error
    }
  }

  public get<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: "GET" })
  }

  public post<T>(
    endpoint: string,
    body?: unknown,
    options?: RequestOptions
  ): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: "POST",
      body: JSON.stringify(body),
    })
  }

  public put<T>(
    endpoint: string,
    body?: unknown,
    options?: RequestOptions
  ): Promise<T> {
    console.log(body)
    let formattedBody: BodyInit | undefined = undefined

    if (body !== undefined && body !== null) {
      if (typeof body === "string") {
        formattedBody = body
      } else if (body instanceof FormData || body instanceof URLSearchParams) {
        formattedBody = body
      } else {
        formattedBody = JSON.stringify(body)
      }
    }
    return this.request<T>(endpoint, {
      ...options,
      method: "PUT",
      body: formattedBody,
    })
  }

  public delete<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: "DELETE" })
  }
}
export const api = new ApiClient({
  baseUrl: env.NEXT_PUBLIC_API_URL,
  excludedAuthRoutes: [API_ENDPOINTS.admin.login],
})
