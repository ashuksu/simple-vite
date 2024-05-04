import Title from "../ui/Title.tsx";
import TrackList from "../TrackList.tsx";

interface MainProps {
    trackId: string | null;
    onTrackSelect: (id: string | null) => void;
}

export default function Main({ trackId, onTrackSelect }: MainProps) {
    return (
        <section className="section w-1/2">
            <Title title='Track List' styleCSS='text-gray-50'/>
            <TrackList selectedTrackId={trackId} onTrackSelect={onTrackSelect}/>
        </section>
    );
}

