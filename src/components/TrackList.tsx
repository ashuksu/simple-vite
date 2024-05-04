import {useEffect, useState} from "react";
import {TrackItem} from "./TrackItem.tsx";

interface Track {
    id: string;
    attributes: {
        title: string;
        attachments?: {
            url: string;
            updatedAt: string;
        }[];
        images?: {
            main?: {
                height?: number;
                width?: number;
                url: string;
            }[];
        };
    };
}

interface TrackListProps {
    selectedTrackId: string | null;
    onTrackSelect: (id: string | null) => void;
}


const API_URL = 'https://musicfun.it-incubator.app/api/1.0/playlists/tracks';
const API_KEY = '315c4872-16bd-444d-b8d7-63702127f886';

export default function TrackList({selectedTrackId, onTrackSelect}: TrackListProps) {
    const [tracks, setTracks] = useState<Track[] | null>(null);

    useEffect(() => {
        fetch(API_URL, {
            headers: {
                'api-key': API_KEY
            }
        })
            .then(res => res.json())
            .then(json => setTracks(json.data))
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

    const handlResetClick = () => {
        onTrackSelect(null)
    }

    const hendlClick = (id: string | null) => {
        onTrackSelect?.(id)
    }

    return (
        <div
            className={`list flex flex-col items-center justify-center 
                bg-gray-200 rounded-lg p-6 text-gray-700 text-lg`}>
            <button
                className={`flex items-center justify-center mb-2.5 px-5 py-2.5 rounded-lg text-center text-lg text-gray-700
                        ${selectedTrackId ? 'bg-blue-200 cursor-pointer' : 'bg-blue-100 cursor-auto'}`}
                onClick={handlResetClick}>
                Reset selection
            </button>
            {tracks.map((track, index) => {
                return (
                    <TrackItem key={track.id}
                               index={index}
                               track={track}
                               isSelected={track.id === selectedTrackId}
                               onSelect={hendlClick}
                    />
                )
            })}
        </div>
    )
}

