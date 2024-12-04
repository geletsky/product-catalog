import { useEffect, useState } from 'react'

import { ProductType } from '../../../../types/product.types'

export const useFetchProducts = () => {
	const [products, setProducts] = useState<ProductType[] | null>(null)
	const [categories, setCategories] = useState<string[]>([])
	const [error, setError] = useState<string | null>(null)
	const [isLoading, setIsLoading] = useState<boolean>(false)

	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true)
				const response = await fetch('https://fakestoreapi.com/products')

				if (!response.ok) {
					throw new Error('Failed to fetch products')
				}

				const data: ProductType[] = await response.json()
				setProducts(data)

				const uniqueCategories = [...new Set(data?.map(data => data.category))]
				setCategories(uniqueCategories)
			} catch (error: any) {
				setError(error.message)
			} finally {
				setIsLoading(false)
			}
		}
		fetchData()
	}, [])

	return { products, categories, error, isLoading }
}
