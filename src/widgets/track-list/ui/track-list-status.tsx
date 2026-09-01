type Props = {
    message: string
    className: string
}

export const TrackListStatus = ({message, className}: Props) => {
    return (
        <div className={className}>
            {message}
        </div>
    )
}