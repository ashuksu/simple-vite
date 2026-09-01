import {Nav} from "./nav.tsx";
import type {ReactNode} from 'react'

type Props = {
    renderAccountBar: () => ReactNode
}

export const Header = ({renderAccountBar}: Props) => {
    return (
        <header className='header shrink-0 bg-gray-800 border-b border-b-gray-600'>
            <div>
                <div className='container flex items-center justify-between gap-5 py-3 text-white'>
                    <Nav/>
                    {renderAccountBar()}
                </div>
            </div>
        </header>
    )
}