import { FC } from 'react'

import styles from './QuantityButton.module.scss'

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
