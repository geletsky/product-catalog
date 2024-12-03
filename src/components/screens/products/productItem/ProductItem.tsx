import { FC } from 'react'

import styles from './ProductItem.module.scss'

import { Button } from '../../../ui/button/Button'

import { ProductType } from '../../../../types/product.types'

interface ProductItemProps {
	product: ProductType
	addToCart: (product: ProductType) => void
	removeFromCart: (id: number) => void
}

export const ProductItem: FC<ProductItemProps> = ({
	product,
	addToCart,
	removeFromCart
}) => {
	return (
		<div className={styles.wrapper}>
			<img src={product.image} alt='Product Image' />
			<div className={styles.title}>{product.title}</div>
			<div className={styles.info}>
				<div className={styles.price}>{product.price}</div>
				<div className={styles.category}>{product.category}</div>
			</div>
			<div className={styles.footer}>
				<Button onClick={() => addToCart(product)}>Add</Button>
				<Button onClick={() => removeFromCart(product.id)}>Delete</Button>
			</div>
		</div>
	)
}
