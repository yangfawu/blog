import { ReactNode } from "react"
import tw from "tailwind-styled-components"

interface Props {
    $outline?: boolean
    $big?: boolean
    children?: ReactNode
}

const Chip = tw.span<Props>`
    ${({ $big }) => ($big ? "text-base px-3 py-1.5" : "text-sm px-2 py-1")}
    rounded-full
    shadow-sm
    hover:shadow-md
    transition-shadow
    ${({ $outline }) => ($outline ? "border border-red-600 box-border" : "bg-red-600 text-white")}
`

export default Chip
