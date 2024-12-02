import { FC } from 'react'

import styles from './ProductItem.module.scss'

import { Button } from '../../../ui/button/Button'

import { Product } from '../../../../types/product.types'

interface ProductItemProps {
	product: Product
}

export const ProductItem: FC<ProductItemProps> = ({ product }) => {
	return (
		<div className={styles.wrapper}>
			<img src={product.image} alt='Product Image' />
			<div className={styles.title}>{product.title}</div>
			<div className={styles.info}>
				<div className={styles.price}>{product.price}</div>
				<div className={styles.category}>{product.category}</div>
			</div>
			<div className={styles.footer}>
				<Button>Add</Button>
				<Button>Delete</Button>
			</div>
		</div>
	)
}
