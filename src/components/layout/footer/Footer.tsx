import styles from './Footer.module.scss'

export const Footer = () => {
	return (
		<footer>
			<div className={styles.footer}>
				<div className={styles.footerSection}>
					<h4>About Us</h4>
					<ul>
						<li>
							<a href='/about'>Our Story</a>
						</li>
						<li>
							<a href='/team'>Our Team</a>
						</li>
						<li>
							<a href='/careers'>Careers</a>
						</li>
					</ul>
				</div>
				<div className={styles.footerSection}>
					<h4>Customer Service</h4>
					<ul>
						<li>
							<a href='/help'>Help Center</a>
						</li>
						<li>
							<a href='/shipping'>Shipping Policy</a>
						</li>
						<li>
							<a href='/returns'>Returns Policy</a>
						</li>
						<li>
							<a href='/faq'>FAQs</a>
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
