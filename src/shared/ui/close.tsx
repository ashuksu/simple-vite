import {cn} from "tailwind-variants";

export function Close() {
    const className = [
        'flex items-center justify-center w-5 h-5 relative cursor-pointer',
        'before:bg-red-400 before:w-full before:h-[2px] before:scale-75 before:absolute before:top-1/2 before:left-1/2 before:-translate-1/2 before:rotate-45 before:transition before:rounded before:content-[""]',
        'after:bg-red-400 after:w-full after:h-[2px] after:scale-75 after:absolute after:top-1/2 after:left-1/2 after:-translate-1/2 after:rotate-135 after:transition after:rounded after:content-[""]',
        'hover:before:bg-red-500 hover:after:bg-red-500'
    ];

    return (
        <i className={cn(className)}/>
    )
}