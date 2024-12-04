import { FC } from 'react'

import styles from './QuantityButton.module.scss'

import { ProductType } from '../../../types/product.types'

interface QuantityButtonPropsType {
	type: string
	onClick: () => void
}

export const QuantityButton: FC<QuantityButtonPropsType> = ({
	type,
	onClick
}) => {
	return (
		<div className={styles.button} onClick={onClick}>
			{type === 'remove' ? '-' : '+'}
		</div>
	)
}
