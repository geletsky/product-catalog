import { FC, useState } from 'react'

import styles from './ProductList.module.scss'

import { Select } from '../../../ui/select/Select'

import { useCart } from '../../../../context/CartContext'
import { ProductItem } from '../productItem/ProductItem'

import { useFetchProducts } from './useFetchProducts'
import { useFilterAndSortProducts } from './useFilterAndSortProducts'

export const ProductList: FC = () => {
	const { products, categories } = useFetchProducts()
	const [sortBy, setSortBy] = useState<string>('ascending')
	const [selectedCategory, setSelectedCategory] = useState<string>('all')
	const { addToCart, removeFromCart } = useCart()
	const dataSort = ['ascending', 'descending']

	const filteredAndSortedProducts = useFilterAndSortProducts(
		products,
		selectedCategory,
		sortBy
	)

	return (
		<>
			{filteredAndSortedProducts ? (
				<div className={styles.wrapper}>
					<div className={styles.header}>
						<div className={styles.info}>
							<h2>New Stock!</h2>
							<p>
								<span>{filteredAndSortedProducts?.length} items</span> are available
							</p>
						</div>
						<div className={styles.selects}>
							<Select
								data={['all', ...categories]}
								onChange={setSelectedCategory}
							/>
							<Select data={dataSort} onChange={setSortBy} />
						</div>
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
