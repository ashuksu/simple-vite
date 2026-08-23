import {cn} from "../../lib/utils";

interface Props {
    title: string;
    className?: string;
}

export function Title({title, className}: Props) {
    return (
        <h2 className={cn(
            'text-gray-50 font-bold text-2xl text-center m-0 mb-5',
            className
        )}>
            {title}
        </h2>
    )
};