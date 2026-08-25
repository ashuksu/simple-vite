import {Title} from "../../../shared/ui/title.tsx";
import {TrackList} from "../../track-list/ui/track-list.tsx";

interface MainProps {
    trackId: string | null;
    onTrackSelect: (id: string | null) => void;
}

export function MainSection({trackId, onTrackSelect}: MainProps) {
    return (
        <section className="section w-1/2">
            <Title title='Track List' className='text-myPurpur/80'/>
            <TrackList selectedTrackId={trackId} onTrackSelect={onTrackSelect}/>
        </section>
    );
}

