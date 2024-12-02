import { Cart } from '../components/screens/cart/Cart'
import { Products } from '../components/screens/products/Products'

export const routes = [
	{
		path: '/',
		component: Products
	},
	{
		path: '/cart',
		component: Cart
	}
]
