import { useMutation, useQueryClient } from "@tanstack/react-query"
import { api, API_ENDPOINTS } from "@repo/api"
import { TLoginForm } from "@repo/core/schemas/gateway/login.schema"
import { toast } from "@repo/ui/components/sonner"
import { adminKeys } from "../query/admin.query"

export const useAdminLoginMutation = () => {
  return useMutation({
    mutationFn: async (data: TLoginForm) => {
      const response = await api.post(API_ENDPOINTS.admin.login, data)
      return response
    },
    onError(err) {
      toast.error(err.message)
    },
  })
}

export const useAdminLogoutMutation = () => {
  return useMutation({
    mutationFn: async () => {
      const response = await api.delete(API_ENDPOINTS.admin.logout)
      return response
    },
    onError(err) {
      toast.error(err.message)
    },
  })
}
export const useAdminUpdatePageMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (data: Record<string, any>) => {
      const params = new URLSearchParams()

      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          let cleanValue = String(value)

          if (cleanValue.startsWith('"') && cleanValue.endsWith('"')) {
            cleanValue = cleanValue.slice(1, -1)
          } else if (cleanValue.endsWith('"')) {
            cleanValue = cleanValue.slice(0, -1)
          }

          params.append(key, cleanValue)
        }
      })

      const response = await api.put(
        API_ENDPOINTS.admin.adminDasboardPage,
        params.toString(),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      return response
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [adminKeys.adminPageDetails],
      })
    },
    onError(err: any) {
      console.log("error")
      toast.error(err.message || "Failed to update page")
    },
  })
}
