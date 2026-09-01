import {useEffect, useState} from "react";
import {getTrack} from "../api/track-api";
import type {TrackDetailsResource} from "./types";

export function useTrackDetails(trackId: string | null) {
    const [trackDetails, setTrackDetails] = useState<TrackDetailsResource | null>(null);

    useEffect(() => {
        if (!trackId) return;
        getTrack(trackId).then((res) => setTrackDetails(res.data));
    }, [trackId]);

    return {trackDetails};
}