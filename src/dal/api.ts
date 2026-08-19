import {API_KEY, API_URL} from "../config";

export type GetTrackDetailsOutput = { data: TrackDetailsResource }
export type GetTrackListOutput = { data: Array<Track> }

export type Track = {
    id: string
    attributes: {
        title: string
    }
}

export type TrackDetailsResource = {
    id: string | null
    attributes: {
        images?: {
            main: Array<{
                width: number
                height: number
                url: string
            }>
        }

        title: string
        attachments: Array<{
            url: string;
            updatedAt?: string
        }>
    }
}

const TRACKS_URL = `${API_URL}/playlists/tracks`;

export function getTracks(): Promise<GetTrackListOutput> {
    return fetch(TRACKS_URL, {
        headers: {
            'api-key': API_KEY
        }
    }).then(res => {
        if (!res.ok) throw new Error(`HTTP error! status (Track List): ${res.status}`);
        return res.json();
    })
}


export function getTrack(trackId: string): Promise<GetTrackDetailsOutput> {
    return fetch(TRACKS_URL + '/' + trackId, {
        headers: {
            'api-key': API_KEY
        }
    }).then(res => {
        if (!res.ok) throw new Error(`HTTP error! status (Track Detail): ${res.status}`);
        return res.json();
    });
}
