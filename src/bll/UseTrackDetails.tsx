import {useEffect, useState} from "react";
import {getTrack, type TrackDetailsResource} from "../dal/api";

export function useTrackDetails(trackId: string | null) {
    const [trackDetails, seTrackDetails] = useState<TrackDetailsResource | null>(null);

    useEffect(() => {
        if (!trackId) return;

        getTrack(trackId)
            .then(json => seTrackDetails(json.data))
            .catch(err => console.error('Error Selected Track: ' + err));
    }, [trackId]);

    return {trackDetails};
}