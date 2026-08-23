import {Link} from "@tanstack/react-router";

export function Nav() {
    const className = '[&.active]:text-amber-500'

    return (
        <nav className="flex gap-3">
            <Link to="/" className={className}>
                Home
            </Link>
            <Link to="/about" className={className}>
                About
            </Link>
            <Link to="/music-fun" className={className}>
                Music Fun
            </Link>
        </nav>
    )
}