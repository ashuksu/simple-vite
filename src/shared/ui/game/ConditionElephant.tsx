type Props = {
    title: string
}

export function ConditionElephant(props: Props) {
    return (
        <h2 className='font-bold text-2xl text-red-500'>
            {props.title}
        </h2>
    )
}