import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { CartProvider } from './context/CartContext.tsx'
import './reset.css'
import './main.css'
import { Router } from './routes/Router.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<CartProvider>
			<Router />
		</CartProvider>
	</StrictMode>
)
