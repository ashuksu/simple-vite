import type {Track} from "../dal/api";
import {clsx} from "clsx";

type Props = {
    index: number
    track: Track
    isSelected: boolean
    onSelect: (id: string) => void
}

export function TrackItem({index, track, isSelected, onSelect}: Props) {
    const handleClick = (): void => onSelect?.(track.id);

    const css = [
        'before:content-(--index-track) before:absolute before:inset-s-2.5 before:inset-bs-2.5',
        'relative cursor-pointer flex flex-col w-full py-2.5 px-5 pl-10 gap-2.5 border-2',
        isSelected ? 'border-red-500 border-2' : 'border-transparent'
    ]

    return (
        <div
            style={{'--index-track': `"${index + 1}"`} as React.CSSProperties}
            className={clsx(css)}
            onClick={handleClick}>

            <p className='break-all text-left'>
                {track.attributes.title}
            </p>
        </div>
    )
}