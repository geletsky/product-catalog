import { FC } from 'react'

import styles from './Select.module.scss'

interface SelectPropsType {
	data: string[]
	onChange?: (value: string) => void
}

export const Select: FC<SelectPropsType> = ({ data, onChange }) => {
	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		if (onChange) {
			onChange(event.target.value)
		}
	}

	return (
		<div className={styles.wrapper}>
			<select className={styles.select} onChange={handleChange}>
				{data.map((item, index) => (
					<option key={index} value={item}>
						{item}
					</option>
				))}
			</select>
		</div>
	)
}
