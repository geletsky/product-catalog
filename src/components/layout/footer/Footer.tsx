import { FC } from 'react'
import { Link } from 'react-router-dom'

import styles from './Footer.module.scss'

export const Footer: FC = () => {
	return (
		<footer>
			<div className={styles.footer}>
				<div className={styles.footerSection}>
					<h4>About Us</h4>
					<ul>
						<li>
							<Link to='/about'>Our Story</Link>
						</li>
						<li>
							<Link to='/team'>Our Team</Link>
						</li>
						<li>
							<Link to='/careers'>Careers</Link>
						</li>
					</ul>
				</div>
				<div className={styles.footerSection}>
					<h4>Customer Service</h4>
					<ul>
						<li>
							<Link to='/help'>Help Center</Link>
						</li>
						<li>
							<Link to='/shipping'>Shipping Policy</Link>
						</li>
						<li>
							<Link to='/returns'>Returns Policy</Link>
						</li>
						<li>
							<Link to='/faq'>FAQs</Link>
						</li>
					</ul>
				</div>
				<div className={styles.footerSection}>
					<h4>Contact</h4>
					<ul>
						<li>
							Email: <a href='mailto:support@store.com'>support@store.com</a>
						</li>
						<li>
							Phone: <a href='tel:+1234567890'>+1 234 567 890</a>
						</li>
						<li>Address: 123 Market St, City, Country</li>
					</ul>
				</div>
			</div>

			<div className={styles.footerBottom}>
				<p>&copy; 2024 Your Store. All rights reserved.</p>
			</div>
		</footer>
	)
}
