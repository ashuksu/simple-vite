import Title from "../elements/Title";
import TrackDetails from "../TrackDetails";
import {Game} from "../game/Game";

export default function SidebarMenu({trackId}: {trackId: string | null}) {
    return (
        <aside className="sidebar-menu w-1/2">
            <Title title='Track Details' styleCSS='text-gray-50 mb-5'/>
            <TrackDetails key={trackId} trackId={trackId}/>
            <Title title='Game' styleCSS='text-gray-50 mt-5'/>
            <Game/>
        </aside>
    )
}