import ExternalLink from "./external-link"
import Links from "./links"

export default function Developer() {
    return (
        <Links title="Developer">
            <p>
                <ExternalLink href="https://github.com/yangfawu/blog">
                    Source Code
                </ExternalLink>
            </p>
            <p>
                <ExternalLink href="https://github.com/yangfawu/blog/commits/main/">
                    Change Log
                </ExternalLink>
            </p>
        </Links>
    )
}
