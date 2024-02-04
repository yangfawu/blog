import tw from "tailwind-styled-components"

const MdxH2 = tw.h2`
    text-2xl
    font-bold
    hover:underline
    hover:text-red-600
    target:text-red-600
    transition-colors
    pt-4
    first:pt-0
    [&>a]:text-black
    [&>a]:hover:text-red-600
`

export default MdxH2
