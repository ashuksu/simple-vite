import {Title} from "../../../shared/ui/title";
import {TrackDetails} from "../../../entities/track";
import {Game} from "../../../widgets/game/ui/game";

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