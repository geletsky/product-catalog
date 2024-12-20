import { FC } from 'react'

import styles from './ProductItem.module.scss'

import { Button } from '../../../ui/button/Button'

import { ProductType } from '../../../../types/product.types'

interface ProductItemProps {
	product: ProductType
	addToCart: (product: ProductType) => void
	removeFromCart: (product: ProductType) => void
}

export const ProductItem: FC<ProductItemProps> = ({
	product,
	addToCart,
	removeFromCart
}) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.image}>
				<img src={product.image} alt='Product Image' />
			</div>
			<div className={styles.title}>{product.title}</div>
			<div className={styles.info}>
				<div className={styles.price}>${product.price}</div>
				<div className={styles.category}>• {product.category}</div>
			</div>
			<div className={styles.footer}>
				<Button onClick={() => addToCart(product)} variant={'yellow'}>
					Add to Cart
				</Button>
				<Button onClick={() => removeFromCart(product)}>
					Remove from Cart
				</Button>
			</div>
		</div>
	)
}
