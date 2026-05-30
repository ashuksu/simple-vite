import {useState} from "react";

export function uaeTrackSelection() {
    const [trackId, setTrackId] = useState<string | null>(null);

    return {trackId, setTrackId}
}