import { FC } from 'react'
import { Link } from 'react-router-dom'

import styles from './CartList.module.scss'

import { Button } from '../../../ui/button/Button'

import { useCart } from '../../../../context/CartContext'
import { CartItem } from '../cartItem/CartItem'

export const CartList: FC = () => {
	const { cart } = useCart()

	return (
		<div style={{ flex: '0 1 75%' }}>
			<div className={styles.info}>
				<h2>Shopping Cart</h2>
				<p>
					<span>{cart.length} items</span> in your cart
				</p>
			</div>
			{cart.length > 0 ? (
				<div className={styles.list}>
					<div className={styles.header}>
						<p>Product</p>
						<p>Price</p>
						<p>Quantity</p>
						<p>Total Price</p>
					</div>
					<div className={styles.wrapper}>
						{cart.map(product => (
							<CartItem key={product.id} product={product} />
						))}
					</div>
				</div>
			) : (
				<div className={styles.warningWrapper}>
					<div className={styles.warningText}>
						It's empty here for now. Time to add something interesting!
					</div>
					<Button variant='orange'>
						<Link to={'/'}>Start Shopping</Link>
					</Button>
				</div>
			)}
		</div>
	)
}
