import {cn} from "../../lib/utils";

interface Props {
    title: string;
    className?: string;
}

export default function Title({title, className}: Props) {
    return (
        <h2 className={cn(
            'text-gray-50 font-bold text-2xl text-center',
            className
        )}>
            {title}
        </h2>
    )
};