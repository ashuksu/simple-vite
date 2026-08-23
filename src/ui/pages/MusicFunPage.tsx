import {Main} from "../music-fun/Main.tsx";
import SidebarMenu from "../music-fun/SidebarMenu.tsx";
import {useTrackSelection} from "../../bll/music-fun/useTrackSelection.tsx";

export function MusicFunPage() {
    const {trackId, setTrackId} = useTrackSelection();
    const handleTrackSelect = (id: string | null) => setTrackId(id)

    return (
        <div className="container flex gap-3">
            <Main
                trackId={trackId}
                onTrackSelect={handleTrackSelect}
            />
            <SidebarMenu trackId={trackId}/>
        </div>
    )
}