"use client"

import { useEffect, useState } from "react"

interface Anchor {
    type: "h2" | "h3"
    href: string
    text: string
}

export default function TOC() {
    const [anchors, setAnchors] = useState<Anchor[]>([])

    useEffect(() => {
        const headings = Array.from(
            document.querySelectorAll("article h2, article h3"),
        ).filter(h => !!h.id)

        const anchors = headings.map(h => ({
            type: h.tagName.toLowerCase() as Anchor["type"],
            href: `#${h.id}`,
            text: h.textContent || h.id,
        }))

        setAnchors(anchors)
    }, [])

    return (
        <div className="max-h-[calc(100vh-8rem)] overflow-y-auto">
            <p className="hidden only:block text-sm italic">
                Oops, it seems like this post has no links for you to jump
                around to.
            </p>
            {anchors.map(({ type, href, text }) => (
                <p
                    key={href}
                    className="text-semibold text-red-600 hover:underline underline-offset-1"
                >
                    <a href={href} className={type === "h2" ? "" : "ml-8"}>
                        {text}
                    </a>
                </p>
            ))}
        </div>
    )
}
