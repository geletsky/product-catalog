import { FC } from 'react'

import styles from './CartItem.module.scss'

import { CartItemType } from '../../../../types/product.types'

interface CartItemProps {
	product: CartItemType
}

export const CartItem: FC<CartItemProps> = ({ product }) => {
	return (
		<>
			<div className={styles.cart}>
				<div className={styles.wrapper}>
					<div className={styles.image}>
						<img src={product.image} alt='Image Of Product' />
					</div>
					<div className={styles.info}>
						<div className={styles.category}>{product.category}</div>
						<div className={styles.title}>{product.title}</div>
						<div className={styles.rating}>
							Rating <span>{product.rating.rate}</span>
						</div>
					</div>
				</div>
				<div className={styles.price}>${product.price}</div>
				<div className={styles.quantity}>{product.quantity}</div>
				<div className={styles.totalPrice}>
					${product.price * product.quantity}
				</div>
			</div>
		</>
	)
}