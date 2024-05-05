interface TitleProps {
    title: string;
    styleCSS?: string;
}

export default function Title(props: TitleProps) {
    return (
        <h2 className={`${props.styleCSS ?? ''} font-bold text-2xl text-center`}>
            {props.title}
        </h2>
    )
};