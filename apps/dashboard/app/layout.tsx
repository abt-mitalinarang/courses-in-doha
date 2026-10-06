import { Sidebar } from "@repo/registry"
import { Toast } from "@repo/ui/components/sonner"
import { RootLayout } from "@repo/ui/components/root-layout"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <RootLayout className="flex">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
      <Toast />
    </RootLayout>
  )
}
