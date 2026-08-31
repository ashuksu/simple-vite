import {Link} from "@tanstack/react-router";
import {cn} from "tailwind-variants";

export function Nav() {
    const className = '[&.active]:text-amber-500 [&.active]:cursor-default font-bold hover:text-amber-300 transition text-center flex items-center justify-center px-4 py-2'

    return (
        <nav className="flex gap-6">
            <Link
                to="/"
                className={className}
                activeProps={{className: cn('text-green-400 font-normal')}}>
                Play list
            </Link>
            <Link
                to="/about"
                className={className}>
                About
            </Link>
            <Link
                to="/music-fun"
                className={className}
                activeProps={{className: cn(['text-blue-400 scale-[-1]', 'drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]'])}}>
                Music Fun
            </Link>
        </nav>
    )
}