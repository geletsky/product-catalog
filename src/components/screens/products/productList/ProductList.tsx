import { FC, useEffect, useState } from 'react'

import styles from './ProductList.module.scss'

import { Product } from '../../../../types/product.types'
import { ProductItem } from '../productItem/ProductItem'

export const ProductList: FC = () => {
	const [data, setData] = useState<Product[] | null>(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('https://fakestoreapi.com/products')

				if (!response.ok) {
					throw new Error('Failed to fetch products')
				}

				const data: Product[] = await response.json()

				setData(data)
			} catch (error) {
				console.log(error)
			}
		}

		fetchData()
	}, [])
	
	return (
		<div className={styles.products}>
			{data?.map(product => <ProductItem key={product.id} product={product} />)}
		</div>
	)
}
