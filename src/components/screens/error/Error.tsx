import { FC } from 'react'
import { Link } from 'react-router-dom'

import styles from './Error.module.scss'

import { Button } from '../../ui/button/Button'

interface ErrorPropsType {
	error: string
}

export const Error: FC<ErrorPropsType> = ({ error }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.text}>Oops! Something Went Wrong</div>
			<div className={styles.error}>{error}</div>
			<Button variant='orange'>
				<Link to={'/'}>Back To Home</Link>
			</Button>
		</div>
	)
}
