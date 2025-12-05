import type React from "react"

// Root layout mínimo requerido por Next.js App Router.
// El layout real con estilos y providers está en app/[locale]/layout.tsx
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
