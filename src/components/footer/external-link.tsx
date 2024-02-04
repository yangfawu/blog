import tw from "tailwind-styled-components"

const ExternalLink = tw.a`
    text-red-600
    underline-offset-2
    hover:underline
`
ExternalLink.defaultProps = {
    target: "_blank",
    rel: "noopener noreferrer",
}

export default ExternalLink
