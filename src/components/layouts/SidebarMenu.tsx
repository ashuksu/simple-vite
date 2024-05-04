import Title from "../ui/Title.tsx";
import TrackDetails from "../TrackDetails.tsx";

export default function SidebarMenu({trackId}: {trackId: string | null}) {
    return (
        <aside className="sidebar-menu w-1/2">
            <Title title='Track Details' styleCSS='text-gray-50'/>
            <TrackDetails trackId={trackId}/>
        </aside>
    )
}