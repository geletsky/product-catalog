import { FC, ReactNode, createContext, useContext, useState } from 'react'

import { CartItemType, ProductType } from '../types/product.types'

interface CartContextType {
	cart: CartItemType[]
	addToCart: (product: ProductType) => void
	removeFromCart: (product: ProductType) => void
	clearCart: () => void
	showNotification: (message: string) => void
	totalPrice: number
	isNotification: boolean
	notificationMessage: string
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [cart, setCart] = useState<CartItemType[]>([])
	const [isNotification, setIsNotification] = useState<boolean>(false)
	const [notificationMessage, setNotificationMessage] = useState<string>('')

	const addToCart = (product: ProductType) => {
		setCart(prev => {
			const item = prev.find(item => item.id === product.id)

			if (item) {
				showNotification('Product added to cart!')
				return prev.map(item =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				)
			}
			showNotification('Product added to cart!')

			return [...prev, { ...product, quantity: 1 }]
		})
	}

	const removeFromCart = (product: ProductType) => {
		setCart(prev => {
			const item = prev.find(item => item.id === product.id)

			if (item?.quantity === undefined) {
				showNotification('There is no item in the cart!')
				return prev
			}

			if (item?.quantity === 1) {
				showNotification('The item has been removed from the cart!')
				return prev.filter(item => item.id !== product.id)
			} else {
				showNotification('Has been removed one position from the cart!')
				return prev.map(item =>
					item.id === product.id
						? { ...item, quantity: item.quantity - 1 }
						: item
				)
			}
		})
	}

	const clearCart = () => {
		setCart([])
	}

	const totalPrice = parseFloat(
		cart
			.reduce((total, item) => total + item.price * item.quantity, 0)
			.toFixed(1)
	)

	const showNotification = (message: string) => {
		setIsNotification(true)
		setNotificationMessage(message)

		setTimeout(() => setIsNotification(false), 3000)
	}

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				removeFromCart,
				clearCart,
				totalPrice,
				showNotification,
				isNotification,
				notificationMessage
			}}
		>
			{children}
		</CartContext.Provider>
	)
}

export const useCart = () => {
	const context = useContext(CartContext)

	if (!context) {
		throw new Error('Error in CartProvider')
	}

	return context
}
