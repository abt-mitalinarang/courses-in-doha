import { api, API_ENDPOINTS } from "@repo/api"

import { useQuery } from "@tanstack/react-query"

export const adminKeys = {
  adminDetails: "adminDetails",
  adminPageDetails: "adminPageDetails",
}
export const useGetAdminDetails = () => {
  return useQuery({
    queryKey: [adminKeys.adminDetails],
    queryFn: () => api.get(API_ENDPOINTS.admin.adminDetails),
  })
}
export const useGetAdminPagesDetails = () => {
  return useQuery({
    queryKey: [adminKeys.adminPageDetails],
    queryFn: () => api.get(API_ENDPOINTS.admin.adminDasboardPage),
  })
}
