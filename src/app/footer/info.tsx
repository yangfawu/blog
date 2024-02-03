import Image from "next/image"
import ExternalLink from "./external-link"

export default function Info() {
    return (
        <div className="space-y-4 max-w-xs text-sm">
            <div>
                <Image
                    src="/logo.svg"
                    alt="Yangfa Wu"
                    width={0}
                    height={0}
                    className="w-52 h-auto"
                />
            </div>
            <p>
                This is my personal blog site built with{" "}
                <ExternalLink href="https://nextjs.org/">Next.js</ExternalLink>.
                I document things I encountered along my learning journey so
                that I can refer back to them for a quick reference or
                refresher. I hope others on a similar path of discovery find
                these posts useful as well!
            </p>
            <div>
                <p>
                    <ExternalLink href="tel:16467555009">
                        +1 (646) 755-5009
                    </ExternalLink>
                </p>
                <p>
                    <ExternalLink href="mailto:yangfa.wu1@gmail.com">
                        yangfa.wu1@gmail.com
                    </ExternalLink>
                </p>
            </div>
        </div>
    )
}
