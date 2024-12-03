import { useEffect, useState } from 'react'

import { Product } from '../../../../types/product.types'

export const useFetchProducts = () => {
	const [products, setProducts] = useState<Product[] | null>(null)
	const [categories, setCategories] = useState<string[]>([])
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('https://fakestoreapi.com/products')

				if (!response.ok) {
					throw new Error('Failed to fetch products')
				}

				const data: Product[] = await response.json()
				setProducts(data)

				const uniqueCategories = [...new Set(data?.map(data => data.category))]
				setCategories(uniqueCategories)
			} catch (error: any) {
				setError(error.message)
			}
		}

		fetchData()
	}, [])

	return { products, categories, error }
}
