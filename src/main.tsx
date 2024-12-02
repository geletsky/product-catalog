import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Router } from './routes/Router.tsx'
import './main.css'
import './reset.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Router />
	</StrictMode>
)
