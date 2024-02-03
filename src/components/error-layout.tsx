import { ReactNode } from "react"
import SnatchingDiv from "./snatching-div"

interface Props {
    title: ReactNode
    description: ReactNode
    children?: ReactNode
}
export default function ErrorLayout({ title, description, children }: Props) {
    return (
        <SnatchingDiv className="my-16 flex flex-col items-center gap-8">
            <p className="uppercase text-white bg-red-600 px-2 py-1 text-xs">
                ERROR
            </p>
            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-bold font-mono">{title}</h1>
                <p>{description}</p>
            </div>
            {children}
        </SnatchingDiv>
    )
}
