import {Link} from "@tanstack/react-router";
import {cx} from "tailwind-variants";

export function Nav() {
    const className = '[&.active]:text-amber-500 font-bold transition'

    return (
        <nav className="flex gap-3">
            <Link
                to="/"
                className={className}
                activeProps={{className: cx('text-green-400 font-normal')}}>
                Home
            </Link>
            <Link
                to="/about"
                className={className}>
                About
            </Link>
            <Link
                to="/music-fun"
                className={className}
                activeProps={{className: cx(['text-blue-400 scale-[-1]', 'drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]'])}}>
                Music Fun
            </Link>
        </nav>
    )
}