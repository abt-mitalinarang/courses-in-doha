import { Header } from "@repo/registry"
import { RootLayout } from "@repo/ui/components/root-layout"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <RootLayout>
      {/* <ThemeProvider> */}
      <Header />
      {children}
      {/* </ThemeProvider> */}
    </RootLayout>
  )
}
