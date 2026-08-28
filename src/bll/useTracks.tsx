import {useEffect, useState} from "react";
import {getTracks, type Track} from "../dal/api";

export function useTracks() {
    const [tracks, setTracks] = useState<Array<Track> | null>(null);

    useEffect(() => {
        getTracks().then(json => setTracks(json.data))
            .catch(err => console.error('Error Track List: ', err));
    }, []);

    return {tracks}
}