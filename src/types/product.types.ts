export interface ProductType {
	category: string
	description: string
	id: number
	image: string
	price: number
	rating: {
		rate: number
		count: number
	}
	title: string
}

export interface CartItemType extends ProductType {
	quantity: number
}
