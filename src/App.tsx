import {useEffect, useState} from "react";
import PageTitle from "./components/PageTitle";
import SidebarTitle from "./components/SidebarTitle";

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

const API_URL = 'https://musicfun.it-incubator.app/api/1.0/playlists/tracks';
const API_KEY = '315c4872-16bd-444d-b8d7-63702127f886';

export default function App() {
    const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null);
    const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);
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

    useEffect(() => {
        if (!selectedTrackId) return;

        setSelectedTrack(null);

        fetch(API_URL + '/' + selectedTrackId, {
            headers: {
                'api-key': API_KEY
            }
        })
            .then(res => res.json())
            .then(json => setSelectedTrack(json.data))
            .catch(err => console.error('Error Selected Track: ' + err));
    }, [selectedTrackId]);

    if (tracks === null) {
        return (
            <main className="py-10 px-4">
                <div
                    className="flex flex-col items-center justify-center max-w-100 bg-gray-200 rounded-lg p-6 text-gray-700 text-lg">
                    Loading...
                </div>
            </main>
        );
    }

    if (tracks.length === 0) {
        return (
            <main className="py-10 px-4">
                <div
                    className="flex flex-col items-center justify-center max-w-100 bg-gray-200 rounded-lg p-6 text-gray-700 text-lg">
                    No tracks :(
                </div>
            </main>
        );
    }

    return (
        <main className="flex gap-5 py-10 px-4">
            <div
                className={`list w-max max-w-100 flex flex-col items-center justify-center 
                    bg-gray-200 rounded-lg p-6 text-gray-700 text-lg`}>
                <PageTitle/>
                <button
                    className={`cursor-pointer flex items-center justify-center mb-2.5 px-5 py-2.5 rounded-lg 
                        bg-blue-200 text-center text-lg text-gray-700`}
                    onClick={() => {
                        setSelectedTrackId(null)
                        setSelectedTrack(null)
                    }}>
                    Reset selection
                </button>
                {
                    tracks.map((track, index) => (
                        <div
                            key={track.id}
                            style={{
                                '--index-track': `"${index + 1}"`
                            } as React.CSSProperties & Record<string, string>}
                            className={`before:content-[var(--index-track)] before:absolute 
                                before:inset-s-2.5 before:inset-bs-2.5
                                relative cursor-pointer flex flex-col w-full py-2.5 px-5 pl-10 gap-2.5 border-2 
                                ${selectedTrackId === track.id ? 'border-red-500 border-2' : 'border-transparent'}`}
                            onClick={() => {
                                setSelectedTrackId(track.id)
                            }}>

                            <p className='break-all text-left'>
                                {track.attributes.title}
                            </p>
                        </div>
                    ))
                }
            </div>
            <div className="details w-1/2 flex flex-col items-start
                    bg-gray-500 rounded-lg p-6 text-gray-100 text-lg">
                <SidebarTitle/>
                <ul className='text-sm text-left'>
                    {!selectedTrack && !selectedTrackId && <li className='text-lg font-bold'>NO selected</li>}
                    {!selectedTrack && selectedTrackId && <li className='text-sm'>Loading...</li>}
                    {selectedTrack && (
                        <li className='flex flex-col gap-3'>
                            <div className='title flex gap-3'>
                                <span className='font-bold shrink-0'>Title:</span>
                                <span className='break-all'>{selectedTrack.attributes.title}</span>
                            </div>

                            {selectedTrack.attributes.images?.main?.[2]?.url && (
                                <div className="image flex gap-3">
                                    <img
                                        src={selectedTrack.attributes.images.main[2].url}
                                        alt={selectedTrack.attributes.title}
                                        width={selectedTrack.attributes.images.main[2]?.width}
                                        height={selectedTrack.attributes.images.main[2]?.height}

                                        className="w-12 h-12 object-cover rounded"
                                    />
                                </div>
                            )}

                            <div className="updated-at image flex gap-3">
                                {selectedTrack.attributes?.attachments?.[0].updatedAt && new Date(selectedTrack.attributes.attachments[0].updatedAt).toLocaleDateString()}
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </main>
    );
}
