import {TrackItem, useTracks} from "../../../entities/track";
import {TrackListStatus} from "./track-list-status";
import {ResetSelectionButton} from "./reset-selection-button";

interface Props {
    selectedTrackId: string | null;
    onTrackSelect: (id: string | null) => void;
}

export function TrackList({selectedTrackId, onTrackSelect}: Props) {
    const {tracks} = useTracks();
    const className = "list flex flex-col items-center justify-center bg-gray-200 rounded-lg p-6 text-gray-700 text-lg"

    if (tracks === null) {
        return (
            <TrackListStatus
                className={className}
                message="Loading..."
            />
        );
    }

    if (tracks.length === 0) {
        return (
            <TrackListStatus
                className={className}
                message="No tracks :("
            />
        );
    }

    return (
        <div
            className={className}>
            <ResetSelectionButton
                isSelected={Boolean(selectedTrackId)}
                onReset={() => onTrackSelect(null)}
            />
            {tracks.map((track, index) => (
                <TrackItem
                    key={track.id}
                    index={index}
                    track={track}
                    isSelected={track.id === selectedTrackId}
                    onSelect={(id) => onTrackSelect(id)}
                />
            ))}
        </div>
    )
}