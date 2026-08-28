import {TrackItem} from "./TrackItem";
import {useTracks} from "../bll/useTracks";
import {clsx} from "clsx";

interface Props {
    selectedTrackId: string | null;
    onTrackSelect: (id: string | null) => void;
}

export default function TrackList({selectedTrackId, onTrackSelect}: Props) {
    const {tracks} = useTracks();

    if (tracks === null) {
        return (
            <div
                className={`list flex flex-col items-center justify-center 
                bg-gray-200 rounded-lg p-6 text-gray-700 text-lg`}>
                Loading...
            </div>
        );
    }

    if (tracks.length === 0) {
        return (
            <div
                className={`list flex flex-col items-center justify-center 
                bg-gray-200 rounded-lg p-6 text-gray-700 text-lg`}>
                No tracks :(
            </div>
        );
    }

    const handleResetClick = () => {
        onTrackSelect(null)
    }

    const handleClick = (id: string | null) => {
        onTrackSelect?.(id)
    }

    const cssButton = [
        'flex items-center justify-center mb-2.5 px-5 py-2.5 rounded-lg text-center text-lg text-gray-700 cursor-pointer',
        selectedTrackId ? 'bg-blue-200 cursor-pointer' : 'bg-blue-100 cursor-auto'
    ]

    return (
        <div
            className={`list flex flex-col items-center justify-center 
                bg-gray-200 rounded-lg p-6 text-gray-700 text-lg`}>
            <button
                className={clsx(cssButton)}
                onClick={handleResetClick}>
                Reset selection
            </button>
            {tracks.map((track, index) => {
                return (
                    <TrackItem key={track.id}
                               index={index}
                               track={track}
                               isSelected={track.id === selectedTrackId}
                               onSelect={handleClick}
                    />
                )
            })}
        </div>
    )
}

