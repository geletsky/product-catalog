import { FC, ReactNode } from 'react'

import styles from './Button.module.scss'

interface ButtonProps {
	children: ReactNode
	onClick?: () => void
	variant?: string
}

export const Button: FC<ButtonProps> = ({ children, onClick, variant }) => {
	return (
		<button
		className={`
			${styles[variant === 'orange' ? 'btnOrange' : 'button']}
		`}
			onClick={onClick}
		>
			{children}
		</button>
	)
}
