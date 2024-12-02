import { IoCartSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'

import styles from './Header.module.scss'

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>IProduct</div>
			<nav className={styles.menu}>
				<ul>
					<li>
						<Link to='/'>Products</Link>
					</li>
				</ul>
			</nav>
			<div className={styles.actions}>
				<Link to='/cart'>
					<IoCartSharp />
				</Link>
			</div>
		</header>
	)
}
