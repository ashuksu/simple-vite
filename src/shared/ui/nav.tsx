import {Link} from "@tanstack/react-router";
import {cx} from "tailwind-variants";

export function Nav() {
    const className = '[&.active]:text-amber-500 [&.active]:cursor-default font-bold hover:text-amber-300 transition'

    return (
        <nav className="flex gap-6">
            <Link
                to="/"
                className={className}
                activeProps={{className: cx('text-green-400 font-normal')}}>
                Play list
            </Link>
            <Link
                to="/my-playlist-page"
                className={className}>
                My Playlist
            </Link>
            <Link
                to="/oauth/callback"
                className={className}>
                OAuth2 Callback
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