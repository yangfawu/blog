import Link, { LinkProps } from "next/link"
import { ReactNode } from "react"

interface Props {
    href: LinkProps["href"]
    disabled: boolean
    children?: ReactNode
}
export default function Button({ href, disabled, children }: Props) {
    if (disabled) {
        return (
            <div className="w-8 h-8 border-slate-100 bg-slate-100 opacity-50 rounded-sm relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {children}
                </div>
            </div>
        )
    }

    return (
        <Link
            href={href}
            className="w-8 h-8 border-gray-100 bg-slate-100 rounded-sm relative"
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {children}
            </div>
        </Link>
    )
}
