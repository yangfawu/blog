import Image from "next/image"
import { HTMLProps } from "react"

export default function MdxImage({
    src,
    alt,
    title,
}: HTMLProps<HTMLImageElement>) {
    const $src = src || "/not-found.jpg"
    return (
        <Image
            src={$src}
            alt={alt || $src}
            width={0}
            height={0}
            title={title}
            sizes="100vw"
            className="w-full h-auto rounded-md bg-slate-100/50"
        />
    )
}
