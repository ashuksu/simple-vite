import {useEffect, useState} from "react";
import {TrackItem} from "./TrackItem";
import {getTracks, type Track} from "../data/api";

interface Props {
    selectedTrackId: string | null;
    onTrackSelect: (id: string | null) => void;
}

export default function TrackList({selectedTrackId, onTrackSelect}: Props) {
    const [tracks, setTracks] = useState<Array<Track> | null>(null);

    useEffect(() => {
        getTracks().then(json => setTracks(json.data))
            .catch(err => console.error('Error Track List: ', err));
    }, []);

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

    return (
        <div
            className={`list flex flex-col items-center justify-center 
                bg-gray-200 rounded-lg p-6 text-gray-700 text-lg`}>
            <button
                className={`flex items-center justify-center mb-2.5 px-5 py-2.5 rounded-lg text-center text-lg text-gray-700
                        ${selectedTrackId ? 'bg-blue-200 cursor-pointer' : 'bg-blue-100 cursor-auto'}`}
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

