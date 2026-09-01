type Props = {
    isSelected: boolean
    onReset: () => void
}

export const ResetSelectionButton = ({isSelected, onReset}: Props) => {
    return (
        <button
            disabled={!isSelected}
            className='button button--accent'
            onClick={onReset}
        >
            Reset selection
        </button>
    )
}