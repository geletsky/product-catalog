import { useEffect, useState } from 'react'

import { ProductType } from '../../../../types/product.types'

export const useFilterAndSortProducts = (
	products: ProductType[] | null,
	selectedCategory: string,
	sortBy: string
) => {
	const [filterAndSortProducts, setFilterAndSortProducts] = useState<
		ProductType[] | null
	>(null)

	const sortProducts = (products: ProductType[] | null): ProductType[] => {
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
