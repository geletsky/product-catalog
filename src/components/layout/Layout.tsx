import { FC, ReactNode } from 'react'

import styles from './Layout.module.scss'

import { Footer } from './footer/Footer'
import { Header } from './header/Header'

interface LayoutProps {
	children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Header />
			{children}
			<Footer />
		</div>
	)
}
