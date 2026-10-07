export type TAppName = "web" | "dashboard" | "gateway"

export interface IAppEntry {
  prefix: string
  baseUrl: () => string
}
export const APP_REGISTRY: Record<TAppName, IAppEntry> = {
  web: {
    prefix: "/",
    baseUrl: () => "https://localhost:3001",
  },
  dashboard: {
    prefix: "/dashboard",
    baseUrl: () => "https://localhost:7071",
  },
  gateway: {
    prefix: "/",
    baseUrl: () => "https://localhost:7070",
  },
}

export function resolveApp(path: string): TAppName {
  const entries = Object.entries(APP_REGISTRY) as [TAppName, IAppEntry][]
  const sorted = entries.sort((a, b) => b[1].prefix.length - a[1].prefix.length)

  for (const [appName, entry] of sorted) {
    if (entry.prefix === "/") continue
    if (path === entry.prefix || path.startsWith(entry.prefix + "/")) {
      return appName
    }
  }

  return "web"
}

export function currentApp(): TAppName {
  if (typeof window === "undefined") return "web"

  const origin = window.location.origin
  const entries = Object.entries(APP_REGISTRY) as [TAppName, IAppEntry][]

  console.log(entries)
  for (const [appName, entry] of entries) {
    if (entry.baseUrl() === origin) return appName
  }

  return "web"
}

export function isCrossApp(path: string): boolean {
  return resolveApp(path) !== currentApp()
}

export interface NavigateOptions {
  replace?: boolean
  query?: Record<string, string>
}

export function navigate(path: string, options: NavigateOptions = {}): void {
  console.log("gdsrg")
  if (typeof window === "undefined") {
    console.log("dfesg")
    console.warn("[navigate] called in a non-browser environment — no-op.")
    return
  }
  console.log(options)
  const { replace = false, query } = options

  const fullPath = buildPath(path, query)
  console.log(buildPath)

  if (isCrossApp(path)) {
    const targetApp = resolveApp(path)
    const targetOrigin = APP_REGISTRY[targetApp].baseUrl()
    const url = `${targetOrigin}${fullPath}`

    if (replace) {
      window.location.replace(url)
    } else {
      window.location.href = url
    }
  } else {
    if (replace) {
      window.history.replaceState(null, "", fullPath)
    } else {
      window.history.pushState(null, "", fullPath)
    }

    window.dispatchEvent(new PopStateEvent("popstate", { state: null }))
  }
}

function buildPath(path: string, query?: Record<string, string>): string {
  if (!query || Object.keys(query).length === 0) return path
  const params = new URLSearchParams(query).toString()
  const separator = path.includes("?") ? "&" : "?"
  console.log(`${path}${separator}${params}`)
  return `${path}${separator}${params}`
}

export function absoluteUrl(
  path: string,
  query?: Record<string, string>
): string {
  const targetApp = resolveApp(path)
  const origin = APP_REGISTRY[targetApp].baseUrl()
  return `${origin}${buildPath(path, query)}`
}
