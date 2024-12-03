import { FC } from 'react'

import styles from './CartList.module.scss'

import { useCart } from '../../../../context/CartContext'
import { CartItem } from '../cartItem/CartItem'

export const CartList: FC = () => {
	const { cart } = useCart()

	return (
		<>
			<div className={styles.info}>
				<h2>Shopping Cart</h2>
				<p>
					<span>{cart.length} items</span> in your cart
				</p>
			</div>
			<div className={styles.list}>
				<div className={styles.header}>
					<p>Product</p>
					<p>Price</p>
					<p>Quantity</p>
					<p>Total Price</p>
				</div>
				<div className={styles.wrapper}>
					{cart.map(product => (
						<CartItem product={product} />
					))}
				</div>
			</div>
		</>
	)
}
