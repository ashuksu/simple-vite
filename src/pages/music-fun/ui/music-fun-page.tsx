import {MainSection} from "./main-section.tsx";
import SidebarMenu from "./sidebar-menu.tsx";
import {useTrackSelection} from "../../../features/select-track/model/use-track-selection.ts";

export function MusicFunPage() {
    const {trackId, setTrackId} = useTrackSelection();
    const handleTrackSelect = (id: string | null) => setTrackId(id)

    return (
        <div className="container flex gap-3">
            <MainSection
                trackId={trackId}
                onTrackSelect={handleTrackSelect}
            />
            <SidebarMenu trackId={trackId}/>
        </div>
    )
}