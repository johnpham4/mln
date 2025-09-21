import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./ClientLayout"
import "./globals.css"

export const metadata: Metadata = {
  title: "Triết học Marxist - Vận động và Phát triển Xã hội",
  description:
    "Khám phá học thuyết hình thái kinh tế xã hội và lý do tại sao xã hội luôn vận động, phát triển không ngừng",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}
