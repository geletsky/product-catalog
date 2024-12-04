import { FC } from 'react'
import { IoCartOutline, IoPerson, IoSettingsSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'

import styles from './Header.module.scss'

export const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Link to='/' className={styles.logo}>
				<img src='/logo.svg' alt='Logo' />
				<p className={styles.logoText}>Shopy Store</p>
			</Link>
			<nav className={styles.actions}>
				<Link to='/cart'>
					<IoCartOutline />
				</Link>
				<Link to='/profile'>
					<IoPerson />
				</Link>
				<Link to='/settings'>
					<IoSettingsSharp />
				</Link>
			</nav>
		</header>
	)
}
