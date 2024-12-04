import { FC } from 'react'

import styles from './Loader.module.scss'

export const Loader: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.text}>Loading, please wait…</div>
			<div className={styles.loader}></div>
		</div>
	)
}
