import tw from "tailwind-styled-components"

const MdxH3 = tw.h3`
    text-xl
    font-semibold
    hover:underline
    hover:text-red-600
    target:text-red-600
    transition-colors
    pt-2
    first:pt-0
    [&>a]:text-black
    [&>a]:hover:text-red-600
`

export default MdxH3
