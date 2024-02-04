import Divider from "../divider"
import SnatchingDiv from "../snatching-div"
import Developer from "./developer"
import Info from "./info"
import Map from "./map"
import SocialMedia from "./my-socials"

export default function Footer() {
    return (
        <footer className="space-y-12">
            <Divider />
            <SnatchingDiv>
                <div className="flex gap-8 lg:gap-24 flex-wrap justify-between flex-col md:flex-row">
                    <Info />
                    <div className="flex-1 flex flex-wrap md:flex-nowrap md:justify-end gap-8 md:gap-16">
                        <Map />
                        <Developer />
                        <SocialMedia />
                    </div>
                </div>
                <p className="text-xs py-4 text-slate-800">
                    &copy; {new Date().getFullYear()} Yangfa Wu. All rights
                    reserved.
                </p>
            </SnatchingDiv>
        </footer>
    )
}
