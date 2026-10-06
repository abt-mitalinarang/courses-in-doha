import type { Metadata } from "next";
import { RootLayout } from "@repo/ui/components/root-layout";
import { Providers } from "@repo/store";

export const metadata: Metadata = {
  title: "Gateway",
  description: "Gateway application powered by Next.js in Acme Monorepo",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <RootLayout>
      <Providers>
        {children}
      </Providers>
    </RootLayout>
  );
}
