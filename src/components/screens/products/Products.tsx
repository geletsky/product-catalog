import { FC } from 'react'

import { Layout } from '../../layout/Layout'

import { ProductList } from './productList/ProductList'

export const Products: FC = () => {
	return (
		<Layout>
			<ProductList />
		</Layout>
	)
}
