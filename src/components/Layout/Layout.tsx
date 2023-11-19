import cl from './Layout.module.scss'

import { Suspense, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { Header } from 'models/Header/index'
import { Footer } from 'models/Footer/index'
import { Visble } from 'components/Visble/Visble'

import { resetScroll } from 'helpers/resetScroll'

export const Layout = () => {
	useEffect(() => {
		resetScroll()
	}, [useLocation().pathname])

	return (
		<>
			<Visble />

			<header>
				<Header />
			</header>

			<main className={cl.main}>
				<Suspense>
					<Outlet />
				</Suspense>
			</main>

			<footer>
				<Footer />
			</footer>
		</>
	)
}
