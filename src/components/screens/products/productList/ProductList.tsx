import { FC, useState } from 'react'

import styles from './ProductList.module.scss'

import { Input } from '../../../ui/input/Input'
import { Loader } from '../../../ui/loader/Loader'
import { Select } from '../../../ui/select/Select'

import { useCart } from '../../../../context/CartContext'
import { Notification } from '../../../layout/notification/Notification'
import { Error } from '../../error/Error'
import { ProductItem } from '../productItem/ProductItem'

import { useFetchProducts } from './useFetchProducts'
import { useFilterAndSortProducts } from './useFilterAndSortProducts'

export const ProductList: FC = () => {
	const { products, categories, error, isLoading } = useFetchProducts()
	const [sortBy, setSortBy] = useState<string>('ascending')
	const [selectedCategory, setSelectedCategory] = useState<string>('all')
	const [searchQuery, setSearchQuery] = useState<string>('')
	const { addToCart, removeFromCart, isNotification, notificationMessage } =
		useCart()

	const dataSort = ['ascending', 'descending']

	const filteredAndSortedProducts = useFilterAndSortProducts(
		products,
		selectedCategory,
		sortBy
	)?.filter(product =>
		product.title.toLowerCase().includes(searchQuery.toLowerCase())
	)

	if (error) {
		return <Error error={error} />
	}

	return (
		<>
			<Notification message={notificationMessage} isShow={isNotification} />
			{isLoading ? (
				<Loader />
			) : (
				<div className={styles.wrapper}>
					<div className={styles.header}>
						<div className={styles.info}>
							<h2>New Stock!</h2>
							<p>
								<span>{filteredAndSortedProducts?.length} items</span> are
								available
							</p>
						</div>
						<Input
							value={searchQuery}
							type='search'
							placeholder='Search for products by name'
							onChange={event => setSearchQuery(event.target.value)}
						/>
						<div className={styles.selects}>
							<Select
								data={['all', ...categories]}
								onChange={setSelectedCategory}
							/>
							<Select data={dataSort} onChange={setSortBy} />
						</div>
					</div>

					<div className={styles.products}>
						{filteredAndSortedProducts?.length ? filteredAndSortedProducts?.map(product => (
							<ProductItem
								key={product.id}
								product={product}
								addToCart={addToCart}
								removeFromCart={removeFromCart}
							/>
						)) : <div className={styles.productsError}>No products available</div>}
					</div>
				</div>
			)}
		</>
	)
}
