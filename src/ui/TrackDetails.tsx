import {useTrackDetails} from "../bll/UseTrackDetails";

interface Props {
    trackId: string | null;
}

export default function TrackDetails({trackId}: Props) {
    const {trackDetails} = useTrackDetails(trackId);

    return (
        <div className="details flex flex-col items-start
                    bg-gray-500 rounded-lg p-6 text-gray-100 text-lg">
            <ul className='text-sm text-left'>
                {!trackDetails && !trackId && <li className='text-lg font-bold'>NO selected</li>}
                {!trackDetails && trackId && <li className='text-sm'>Loading...</li>}
                {trackDetails && (
                    <li className='flex flex-col gap-3'>
                        <div className='title flex gap-3'>
                            <span className='font-bold shrink-0'>Title:</span>
                            <span className='break-all'>{trackDetails.attributes.title}</span>
                        </div>

                        {trackDetails.attributes.images?.main?.[2]?.url && (
                            <div className="image flex gap-3">
                                <img
                                    src={trackDetails.attributes.images.main[2].url}
                                    alt={trackDetails.attributes.title}
                                    width={trackDetails.attributes.images.main[2]?.width}
                                    height={trackDetails.attributes.images.main[2]?.height}

                                    className="w-12 h-12 object-cover rounded"
                                />
                            </div>
                        )}

                        <div className="updated-at image flex gap-3">
                            {trackDetails.attributes.attachments?.[0].updatedAt && new Date(trackDetails.attributes.attachments[0].updatedAt).toLocaleDateString()}
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}