import { useEffect, useState } from 'react'

import { Product } from '../../../../types/product.types'

import { SortBy } from './ProductList'

export const useFilterAndSortProducts = (
	products: Product[] | null,
	selectedCategory: string,
	sortBy: SortBy
) => {
	const [filterAndSortProducts, setFilterAndSortProducts] = useState<
		Product[] | null
	>(null)

	const sortProducts = (products: Product[] | null): Product[] => {
		if (!products) return []

		return [...products].sort((a, b) => {
			return sortBy === 'asc' ? a.price - b.price : b.price - a.price
		})
	}

	useEffect(() => {
		if (!products) return

		let filteredData = products

		if (selectedCategory) {
			if (selectedCategory === 'All') {
				filteredData = products
			} else {
				filteredData = products?.filter(
					product => product.category === selectedCategory
				)
			}
		}

		const sortedData = sortProducts(filteredData)
		setFilterAndSortProducts(sortedData)
	}, [products, selectedCategory, sortBy])

	return filterAndSortProducts
}
