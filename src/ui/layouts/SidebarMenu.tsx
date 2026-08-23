import {Title} from "../elements/Title";
import TrackDetails from "../TrackDetails";
import {Game} from "../game/Game";

export default function SidebarMenu({trackId}: { trackId: string | null }) {
    return (
        <aside className="sidebar-menu w-1/2">
            <Title title='Track Details'/>
            <TrackDetails key={trackId} trackId={trackId}/>
            <Title title='Game' className='my-5'/>
            <Game/>
        </aside>
    )
}