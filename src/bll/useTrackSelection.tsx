import {useState} from "react";

export function useTrackSelection() {
    const [trackId, setTrackId] = useState<string | null>(null);

    return {trackId, setTrackId}
}