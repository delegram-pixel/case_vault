import type React from "react"
import type { Metadata } from "next"
import { Onest } from "next/font/google"
import "./globals.css"

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Case Vault - Court Case Management System",
  description:
    "Comprehensive court case filing and management system for judges, attorneys, and court clerks. Streamline case workflows from filing to resolution.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.jpg",
    apple: "/apple-touch-icon.jpg",
  },

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={`${onest.variable} relative antialiased`}>{children}</body>
      </html>
    </>
  )
}
