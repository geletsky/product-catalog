import { FC } from 'react'

import styles from './Select.module.scss'

interface SelectPropsType {
	data: string[]
	onChange?: (value: string) => void
	props?: any
}

export const Select: FC<SelectPropsType> = ({ data, onChange, ...props }) => {
	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		if (onChange) {
			onChange(event.target.value)
		}
	}

	return (
		<div className={styles.wrapper}>
			<select className={styles.select} onChange={handleChange} {...props}>
				{data.map((item, index) => (
					<option key={index} value={item}>
						{item}
					</option>
				))}
			</select>
		</div>
	)
}
