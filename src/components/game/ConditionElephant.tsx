type Props = {
    title: string
}

export function ConditionElephant(props: Props) {
    return (
        <h2 className='py-3 font-bold text-2xl text-red-500'>
            {props.title}
        </h2>
    )
}