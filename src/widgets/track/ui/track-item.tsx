import type {Track} from "../../../shared/api/base.ts";
import {tv} from 'tailwind-variants';
import type {CSSProperties} from "react";

type Props = {
    index: number
    track: Track
    isSelected: boolean
    onSelect: (id: string) => void
}

const className = tv({
    base: [
        'item before:content-(--index-track) before:absolute before:inset-s-2.5 before:inset-bs-2.5',
        'relative cursor-pointer flex flex-col w-full py-2.5 px-5 pl-10 gap-2.5 border-2',
        'data-[selected=true]:text-4xl'
    ],
    variants: {
        isSelected: {
            true: 'border-(--alert) border-2',
            false: 'border-transparent'
        }
    }
});

export function TrackItem({index, track, isSelected, onSelect}: Props) {
    const handleClick = (): void => onSelect?.(track.id);
    const trackIndexStyle = (index: number) => ({'--index-track': `"${index + 1}"`} as CSSProperties);

    return (
        <div
            style={trackIndexStyle(index)}
            className={className({isSelected})}
            onClick={handleClick}
            data-selected={isSelected}>
            <p className='break-all text-left'>
                {track.attributes.title}
            </p>
        </div>
    )
}