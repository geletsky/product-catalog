import { FC } from 'react'
import { Link } from 'react-router-dom'

import styles from './NotFound.module.scss'

import { Button } from '../../ui/button/Button'

export const NotFound: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.text}>Oops! Page Not Found</div>
			<img src='/public/not-found.svg' alt='Not Found' />
			<Button variant='yellow'>
				<Link to={'/'}>Back To Home</Link>
			</Button>
		</div>
	)
}
