import { FC, ReactNode } from 'react'

import styles from './Button.module.scss'

interface ButtonProps {
	children: ReactNode
	onClick?: () => void
}

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
	return (
		<button className={styles.button} onClick={onClick}>
			{children}
		</button>
	)
}
