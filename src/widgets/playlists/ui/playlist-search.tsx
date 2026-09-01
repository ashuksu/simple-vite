type Props = {
    value: string
    onChange: (value: string) => void
}
export const PlaylistSearch = ({value, onChange}: Props) => {
    return (
        <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            type="text"
            placeholder="Search..."
            className="input max-w-md"
        />
    )
}