import SnatchingDiv from "@/components/snatching-div"
import { ReactNode } from "react"

interface Props {
    children: ReactNode
}
export default function Layout({ children }: Props) {
    return (
        <main className="flex-1 py-16">
            <SnatchingDiv>{children}</SnatchingDiv>
        </main>
    )
}
