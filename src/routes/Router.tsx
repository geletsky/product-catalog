import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { NotFound } from '../components/screens/not-found/NotFound'

import { routes } from './routes.data'

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				{routes.map(route => {
					return (
						<Route
							key={route.path}
							path={route.path}
							element={<route.component />}
						/>
					)
				})}
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}
