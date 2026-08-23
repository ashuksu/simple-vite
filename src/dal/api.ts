import {API_KEY, API_URL} from "../config";

export type TrackAttachment = {
    url: string
    updatedAt?: string
}

export type TrackImages = {
    width?: number
    height?: number
    url?: string
}

export type Track = {
    id: string
    attributes: {
        title: string
        attachments: TrackAttachment[]
    }
}

export type TrackDetailsResource = {
    id: string | null
    attributes: {
        images?: {
            main: TrackImages[]
        }
        title: string
        attachments: TrackAttachment[]
    }
}

export type GetTrackDetailsOutput = { data: TrackDetailsResource }
export type GetTrackListOutput = { data: Track[] }

const PAGE_SIZE = (value?: number) => value !== undefined ? `?pageSize=${value}` : '';
const TRACKS_URL = `${API_URL}/playlists/tracks`;
const LIMITED_TRACKS_URL = `${TRACKS_URL}${PAGE_SIZE(5)}`; // 5 tracks per page
const headers: HeadersInit = API_KEY ? {'api-key': API_KEY} : {};
export async function getTracks(): Promise<GetTrackListOutput> {
    const res = await fetch(LIMITED_TRACKS_URL, {headers});

    if (!res.ok) throw new Error(`HTTP error! status (Track List): ${res.status}`);

    return res.json();
}

export async function getTrack(trackId: string): Promise<GetTrackDetailsOutput> {
    const res = await fetch(`${TRACKS_URL}/${trackId}`, {headers});

    if (!res.ok) throw new Error(`HTTP error! status (Track Detail): ${res.status}`);

    return res.json();
}
