import {Nav} from "./nav.tsx";
import type {ReactNode} from 'react'
import styles from './header.module.css'
import {cx} from "tailwind-variants";

type Props = {
    renderAccountBar: () => ReactNode
}

export const Header = ({renderAccountBar}: Props) => {
    return (
        <header className={cx(
            'header shrink-0 bg-gray-800 border-b border-b-gray-600',
            styles.header
        )}>
            <div className={styles.container}>
                <div className={cx(
                    'container flex items-center py-3 text-white',
                    styles.nav
                )}>
                    <Nav/>
                </div>
                <div hidden>{renderAccountBar()}</div>
            </div>
        </header>
    )
}