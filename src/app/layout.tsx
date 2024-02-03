import type { Metadata } from "next"
import { ReactNode } from "react"
import Footer from "./footer"
import "./globals.css"
import Header from "./header"

export const metadata: Metadata = {
    title: "Yangfa Wu's Blog",
    description: "Generated by create next app",
}

interface Props {
    children: ReactNode
}
export default function RootLayout({ children }: Props) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className="min-h-screen bg-orange-100 flex flex-col">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
