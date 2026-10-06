import { useMutation } from "@tanstack/react-query"
import { api, API_ENDPOINTS } from "@repo/api"
import { TLoginForm } from "@repo/core/schemas/gateway/login.schema"

export const useAdminLoginMutation = () => {
  return useMutation({
    mutationFn: async (data: TLoginForm) => {
      const response = await api.post(API_ENDPOINTS.admin.login, data)
      return response
    },
  })
}
