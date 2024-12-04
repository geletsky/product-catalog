import { FC } from 'react'

import styles from './Input.module.scss'

interface InputPropsType {
	value: string
	type: string
	placeholder: string
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<InputPropsType> = ({
	value,
	type,
	placeholder,
	onChange
}) => {
	return (
		<input
			className={styles.input}
			value={value}
			onChange={onChange}
			type={type}
			placeholder={placeholder}
		/>
	)
}
