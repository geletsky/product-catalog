import styles from './Cart.module.scss'

import { Layout } from '../../layout/Layout'

import { CartList } from './cartList/CartList'
import { CartShipping } from './cartShipping/CartShipping'

export const Cart = () => {
	return (
		<Layout>
			<div className={styles.wrapper}>
				<CartList />
				<CartShipping />
			</div>
		</Layout>
	)
}
