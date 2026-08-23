import type {Track} from "../dal/api";
import {cn} from "../lib/utils.ts";
import type {CSSProperties} from "react";

type Props = {
    index: number
    track: Track
    isSelected: boolean
    onSelect: (id: string) => void
}

export function TrackItem({index, track, isSelected, onSelect}: Props) {
    const handleClick = (): void => onSelect?.(track.id);

    const className = [
        'item before:content-(--index-track) before:absolute before:inset-s-2.5 before:inset-bs-2.5',
        'relative cursor-pointer flex flex-col w-full py-2.5 px-5 pl-10 gap-2.5 border-2',
        isSelected ? 'border-(--alert) border-2' : 'border-transparent',
        'data-[selected=true]:text-4xl',
    ]

    const trackIndexStyle = (index: number) => ({'--index-track': `"${index + 1}"`} as CSSProperties);

    return (
        <div
            style={trackIndexStyle(index)}
            className={cn(className)}
            onClick={handleClick}
            data-selected={isSelected}>
            <p className='break-all text-left'>
                {track.attributes.title}
            </p>
        </div>
    )
}