import ExternalLink from "./external-link"
import Links from "./links"

export default function MySocials() {
    return (
        <Links title="My Socials">
            <p>
                <ExternalLink href="https://www.linkedin.com/in/yangfa-wu/">
                    LinkedIn
                </ExternalLink>
            </p>
            <p>
                <ExternalLink href="https://github.com/yangfawu">
                    GitHub
                </ExternalLink>
            </p>
            <p>
                <ExternalLink href="https://yangfawu.github.io/">
                    Website
                </ExternalLink>
            </p>
        </Links>
    )
}
