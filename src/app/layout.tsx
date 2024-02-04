import Footer from "@/components/footer"
import Header from "@/components/header"
import type { Metadata } from "next"
import type { ReactNode } from "react"
import "./globals.css"

export const metadata: Metadata = {
    title: "Yangfa Wu's Blog"
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
