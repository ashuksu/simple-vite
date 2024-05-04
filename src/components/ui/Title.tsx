interface TitleProps {
    title: string;
    styleCSS?: string;
}

export default function Title(props: TitleProps) {
    return (
        <h2 className={`${props.styleCSS ?? ''} mb-5! font-bold text-2xl text-center`}>
            {props.title}
        </h2>
    )
};