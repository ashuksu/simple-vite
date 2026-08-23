import {Nav} from "./Nav.tsx";

export function Header() {
    return (
        <header className='header shrink-0 bg-gray-800 border-b border-b-gray-600'>
            <div className="container flex items-center py-3  text-white">
                <Nav/>
            </div>
        </header>
    )
}