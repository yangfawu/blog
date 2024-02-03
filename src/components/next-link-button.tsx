import Link from "next/link"
import tw from "tailwind-styled-components"

const NextLinkButton = tw(Link)`
    border
    border-red-600
    px-4
    py-3
    rounded-sm
    hover:bg-red-300
    active:bg-red-600
    active:text-white
    transition-colors
`

export default NextLinkButton
