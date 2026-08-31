import {Title} from "../../../shared/ui/title.tsx";
import TrackDetails from "../../../entities/track/ui/track-details.tsx";
import {Game} from "../../../widgets/game/ui/game.tsx";

export default function SidebarMenu({trackId}: { trackId: string | null }) {
    return (
        <aside className="sidebar-menu w-1/2">
            <Title title='Track Details' className='text-(--accent)/50'/>
            <TrackDetails key={trackId} trackId={trackId}/>
            <Title title='Game' className='my-5'/>
            <Game/>
        </aside>
    )
}