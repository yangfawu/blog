import SnatchingDiv from "@/components/snatching-div"
import Spinner from "@/components/spinner"

export default function Loading() {
    return (
        <SnatchingDiv className="h-full min-h-[50vh] flex items-center justify-center">
            <Spinner />
        </SnatchingDiv>
    )
}
