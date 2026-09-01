import {useEffect, useState} from "react";
import {getTracks} from "../api/track-api";
import type {Track} from "./types";

export function useTracks() {
    const [tracks, setTracks] = useState<Track[] | null>(null);

    useEffect(() => {
        getTracks().then((res) => setTracks(res.data));
    }, []);

    return {tracks};
}