import {API_KEY, API_URL} from "../../../shared/config";
import type {GetTrackDetailsOutput, GetTrackListOutput} from "../model/types";

const PAGE_SIZE = (value?: number) => value !== undefined ? `?pageSize=${value}` : '';
const TRACKS_URL = `${API_URL}playlists/tracks`;
const LIMITED_TRACKS_URL = `${TRACKS_URL}${PAGE_SIZE(5)}`;
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