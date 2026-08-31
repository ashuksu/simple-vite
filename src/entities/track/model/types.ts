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