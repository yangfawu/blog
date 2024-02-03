import InternalLink from "./internal-link"
import Links from "./links"

const LINKS: {
    href: string
    text: string
}[] = [
    { href: "/", text: "Home" },
    { href: "/search", text: "Search" },
    { href: "/contact", text: "Contact" },
]

export default function Map() {
    return (
        <Links title="Sitemap">
            {LINKS.map(({ href, text }) => (
                <p key={href}>
                    <InternalLink href={href}>{text}</InternalLink>
                </p>
            ))}
        </Links>
    )
}
