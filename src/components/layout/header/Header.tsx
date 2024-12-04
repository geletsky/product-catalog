import { FC } from 'react'
import {
	IoCart,
	IoPerson,
	IoSettingsSharp
} from 'react-icons/io5'
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
					<IoCart className={styles.icon} />
				</Link>
				<Link to='/profile'>
					<IoPerson className={styles.icon}/>
				</Link>
				<Link to='/settings'>
					<IoSettingsSharp className={styles.icon}/>
				</Link>
			</nav>
		</header>
	)
}
