import { FC, useState } from 'react'

import styles from './ProductList.module.scss'

import { Select } from '../../../ui/select/Select'

import { useCart } from '../../../../context/CartContext'
import { ProductItem } from '../productItem/ProductItem'

import { useFetchProducts } from './useFetchProducts'
import { useFilterAndSortProducts } from './useFilterAndSortProducts'

export const ProductList: FC = () => {
	const { products, categories } = useFetchProducts()
	const [sortBy, setSortBy] = useState<string>('asc')
	const [selectedCategory, setSelectedCategory] = useState<string>('All')
	const { addToCart, removeFromCart } = useCart()
	const dataSort = ['Ascending', 'Descending']

	const filteredAndSortedProducts = useFilterAndSortProducts(
		products,
		selectedCategory,
		sortBy
	)

	return (
		<>
			{products ? (
				<div className={styles.wrapper}>
					<div className={styles.selects}>
						<Select
							data={['All', ...categories]}
							onChange={setSelectedCategory}
						/>
						<Select data={dataSort} onChange={setSortBy} />
					</div>

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
				</div>
			) : (
				<div>Loading...</div>
			)}
		</>
	)
}
