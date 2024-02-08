"use client"

import { ClipboardIcon } from "@heroicons/react/24/outline"
import { HTMLProps, useRef } from "react"
import tw from "tailwind-styled-components"

const Pre = tw.pre`
    whitespace-break-spaces
    overflow-x-auto
`

const CopyButton = tw.button`
    border-1
    border-red-600
    border
    rounded-sm
    px-2
    py-1
    text-sm
    flex gap-1
    text-red-600
    active:bg-red-800
    active:text-white
    transition-colors
`

export default function MdxPre(props: HTMLProps<HTMLPreElement>) {
    const ref = useRef<HTMLPreElement>(null)

    const copy = () => {
        if (ref.current) {
            // highlight contents
            const selection = window.getSelection()
            if (selection) {
                const range = document.createRange()
                range.selectNodeContents(ref.current)
                selection.removeAllRanges()
                selection.addRange(range)
            }

            // copy contents to clipboard
            const contents = selection?.toString() || ""
            navigator.clipboard.writeText(contents)
        }
    }

    return (
        <div className="space-y-1">
            <Pre {...props} ref={ref} />
            <div className="flex justify-end">
                <CopyButton onClick={copy}>
                    <span>Copy</span>
                    <ClipboardIcon className="w-5 h-5" />
                </CopyButton>
            </div>
        </div>
    )
}
