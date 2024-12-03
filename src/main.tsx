import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { CartProvider } from './context/CartContext.tsx'
import './main.css'
import './reset.css'
import { Router } from './routes/Router.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<CartProvider>
			<Router />
		</CartProvider>
	</StrictMode>
)
