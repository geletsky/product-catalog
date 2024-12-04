import { FC } from 'react'

import styles from './Notification.module.scss'

interface NotificationPropsType {
	message: string
	isShow: boolean
}

export const Notification: FC<NotificationPropsType> = ({ message, isShow }) => {
	return (
		<div className={`${styles.notification} ${isShow ? styles.success : ''}`}>
			<svg
				width='20'
				height='20'
				viewBox='0 0 20 20'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M9 13H11V15H9V13ZM9 5H11V11H9V5ZM9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z'
					fill='#26243c'
				/>
			</svg>

			<div className={styles.notificationBody}>
				<div id='notification-type'>Success</div>
				<p id='notification-message'>{message}</p>
			</div>
		</div>
	)
}