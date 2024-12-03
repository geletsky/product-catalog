import { FC, useState } from 'react'

import styles from './ProductList.module.scss'

import { useCart } from '../../../../context/CartContext'
import { ProductItem } from '../productItem/ProductItem'

import { useFetchProducts } from './useFetchProducts'
import { useFilterAndSortProducts } from './useFilterAndSortProducts'

export type SortBy = 'asc' | 'desc'

export const ProductList: FC = () => {
	const { products, categories } = useFetchProducts()
	const [sortBy, setSortBy] = useState<SortBy>('asc')
	const [selectedCategory, setSelectedCategory] = useState<string>('All')
	const { addToCart, removeFromCart, cart } = useCart()

	const filteredAndSortedProducts = useFilterAndSortProducts(
		products,
		selectedCategory,
		sortBy
	)

	return (
		<>
			{products ? (
				<>
					<select
						onChange={event => setSelectedCategory(event.target.value)}
						value={selectedCategory}
					>
						<option value='All'>All</option>
						{categories.map(category => (
							<option key={category}>{category}</option>
						))}
					</select>

					<select
						onChange={event => setSortBy(event.target.value as SortBy)}
						value={sortBy}
					>
						<option value='desc'>Desc</option>
						<option value='asc'>Asc</option>
					</select>
					<div className={styles.products}>
						{filteredAndSortedProducts?.map(product => (
							<ProductItem
								key={product.id}
								product={product}
								addToCart={addToCart}
								removeFromCart={removeFromCart}
							/>
						))}
					</div>
				</>
			) : (
				<div>Loading...</div>
			)}
		</>
	)
}
