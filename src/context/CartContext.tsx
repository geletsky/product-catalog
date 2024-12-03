import { FC, ReactNode, createContext, useContext, useState } from 'react'

import { CartItemType, ProductType } from '../types/product.types'

interface CartContextType {
	cart: CartItemType[]
	addToCart: (product: ProductType) => void
	removeFromCart: (id: number) => void
	clearCart: () => void
	totalPrice: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [cart, setCart] = useState<CartItemType[]>([])

	const addToCart = (product: ProductType) => {
		setCart(prev => {
			const item = prev.find(item => item.id === product.id)

			if (item) {
				return prev.map(item =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				)
			}

			return [...prev, { ...product, quantity: 1 }]
		})
	}

	const removeFromCart = (id: number) => {
		setCart(prev => prev.filter(item => item.id !== id))
	}

	const clearCart = () => {
		setCart([])
	}

	const totalPrice = cart.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	)

	return (
		<CartContext.Provider
			value={{ cart, addToCart, removeFromCart, clearCart, totalPrice }}
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
