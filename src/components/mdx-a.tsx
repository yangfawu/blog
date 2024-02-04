import { HTMLProps } from "react"

export default function MdxA({
    href,
    target,
    ...props
}: HTMLProps<HTMLAnchorElement>) {
    return (
        <a
            className="font-semibold hover:underline text-red-600 active:text-red-800 transition-colors"
            href={href}
            target={(href || "#").startsWith("#") ? undefined : "_blank"}
            {...props}
        />
    )
}
