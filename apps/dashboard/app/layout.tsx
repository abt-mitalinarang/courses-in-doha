import { AdminSidebar } from "@repo/registry"
import { Toast } from "@repo/ui/components/sonner"
import { RootLayout } from "@repo/ui/components/root-layout"
import { Providers } from "@repo/store"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <RootLayout className="flex">
      <Providers>
        <AdminSidebar />
        <main className="flex-1 overflow-y-auto">{children}</main>
        <Toast />
      </Providers>
    </RootLayout>
  )
}
