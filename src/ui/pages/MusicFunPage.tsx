import Main from "../layouts/Main";
import SidebarMenu from "../layouts/SidebarMenu";
import {useTrackSelection} from "../../bll/useTrackSelection";

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