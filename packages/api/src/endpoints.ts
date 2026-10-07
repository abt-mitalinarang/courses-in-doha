export const API_ENDPOINTS = {
  admin: {
    login: "/api/v1/admin/auth/login",
    adminDetails: "/api/v1/admin/dashboard/profile",
    refreshAdminToken: "/api/v1/admin/auth/refresh_access_token",
    adminDasboardPage: "/api/v1/admin/dashboard/page/base",
    logout: "/api/v1/admin/auth/logout",
  },
} as const
export default API_ENDPOINTS
