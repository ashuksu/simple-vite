import {useEffect, useState} from "react";
import {getTrack, type TrackDetailsResource} from "../data/api";

interface Props {
    trackId: string | null;
}

export default function TrackDetails({trackId}: Props) {
    const [selectedTrack, setSelectedTrack] = useState<TrackDetailsResource | null>(null);

    useEffect(() => {
        if (!trackId) {
            setSelectedTrack(null);
            return;
        }

        setSelectedTrack(null);

        getTrack(trackId)
            .then(json => setSelectedTrack(json.data))
            .catch(err => console.error('Error Selected Track: ' + err));
    }, [trackId]);

    return (
        <div className="details flex flex-col items-start
                    bg-gray-500 rounded-lg p-6 text-gray-100 text-lg">
            <ul className='text-sm text-left'>
                {!selectedTrack && !trackId && <li className='text-lg font-bold'>NO selected</li>}
                {!selectedTrack && trackId && <li className='text-sm'>Loading...</li>}
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
                            {selectedTrack.attributes.attachments?.[0].updatedAt && new Date(selectedTrack.attributes.attachments[0].updatedAt).toLocaleDateString()}
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}