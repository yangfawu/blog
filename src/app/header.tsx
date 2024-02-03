import Divider from "@/components/divider"
import SnatchingDiv from "@/components/snatching-div"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <header>
            <SnatchingDiv className="flex gap-4 items-center justify-between">
                <div className="w-[30px] h-[30px]" />
                <div className="py-4">
                    <Link href="/" className="flex gap-4 items-center">
                        <Image
                            src="/logo.svg"
                            alt="Yangfa Wu"
                            width={116}
                            height={30}
                        />
                        <p className="text-xl mx-auto">Personal Blog</p>
                    </Link>
                </div>
                <div className="w-[30px] h-[30px] flex items-center justify-center">
                    <Link href="/search">
                        <MagnifyingGlassIcon className="w-[20px] h-[20px]" />
                    </Link>
                </div>
            </SnatchingDiv>
            <Divider />
        </header>
    )
}
