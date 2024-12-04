import { FC } from 'react'
import { Link } from 'react-router-dom'

import styles from './CartShipping.module.scss'

import { Button } from '../../../ui/button/Button'
import { Select } from '../../../ui/select/Select'

import { useCart } from '../../../../context/CartContext'

export const CartShipping: FC = () => {
	const dataCountry = ['United States', 'Canada', 'Germany']
	const dataCity = ['New York', 'Los Angeles', 'Toronto']
	const daysDelivery = ['7', '14', '20']

	const { totalPrice, clearCart, cart } = useCart()

	return (
		<div className={styles.cartShipping}>
			<div className={styles.wrapper}>
				<div className={styles.wrapperInfo}>
					<h3>Calculated Shipping</h3>
					<Select data={dataCountry} />
					<Select data={dataCity} />
					<Button>Update</Button>
				</div>
				<hr />
				<div className={styles.wrapperInfo}>
					<h3>Days Of Delivery</h3>
					<Select data={daysDelivery} />
					<Button>Apply</Button>
				</div>
				<div className={styles.wrapperTotal}>
					<h3>Cart Total</h3>
					<div className={styles.totalLine}>
						<p className={styles.totalLineText}>Cart Subtotal</p>
						<p className={styles.totalLineDigit}>${totalPrice}</p>
					</div>
					<div className={styles.totalLine}>
						<p className={styles.totalLineText}>Discount</p>
						<p className={styles.totalLineDigit}>$0</p>
					</div>
					<div className={`${styles.totalLine} ${styles.totalLineBold}`}>
						<p className={styles.totalLineText}>Cart Total</p>
						<p className={styles.totalLineDigit}>${totalPrice}</p>
					</div>
					<Button variant='white'>Apply</Button>
				</div>
			</div>
			
			{cart.length > 0 && (
				<Button variant='yellow'>
					<Link to={'/'}>Continue Shopping</Link>
				</Button>
			)}
			<Button onClick={clearCart}>Clear Cart</Button>
		</div>
	)
}
