import Link from "next/link"
import { ReactNode } from "react"
import ExternalLink from "./external-link"

interface Props {
    href: string
    children: ReactNode
}
export default function InternalLink({ href, children }: Props) {
    return (
        <Link href={href} passHref legacyBehavior>
            <ExternalLink target="_self">{children}</ExternalLink>
        </Link>
    )
}
