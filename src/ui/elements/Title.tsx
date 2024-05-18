import {cn} from "../../lib/utils";

interface TitleProps {
    title: string;
    className?: string;
}

export default function Title({title, className}: TitleProps) {
    return (
        <h2 className={cn(
            'text-gray-50 font-bold text-2xl text-center',
            className
        )}>
            {title}
        </h2>
    )
};