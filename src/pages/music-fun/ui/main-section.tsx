import {Title} from "../../../shared/ui/title.tsx";
import {TrackList} from "../../../widgets/track-list";

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

