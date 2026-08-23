import {Title} from "../elements/Title.tsx";
import {TrackList} from "./TrackList.tsx";

interface MainProps {
    trackId: string | null;
    onTrackSelect: (id: string | null) => void;
}

export function Main({trackId, onTrackSelect}: MainProps) {
    return (
        <section className="section w-1/2">
            <Title title='Track List' className='text-myPurpur/80'/>
            <TrackList selectedTrackId={trackId} onTrackSelect={onTrackSelect}/>
        </section>
    );
}

