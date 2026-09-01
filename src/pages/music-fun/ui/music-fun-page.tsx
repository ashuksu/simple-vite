import {MainSection} from "./main-section";
import SidebarMenu from "./sidebar-menu";
import {useTrackSelection} from "../../../features/select-track";

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