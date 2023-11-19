import cl from './Navigations.module.scss'
import Container from '../../../../components/Сontainer/Container'

import { FC, useEffect } from 'react'

import { Link, NavLink, useLocation } from 'react-router-dom'

import { Logo } from '../UI/Logo/Logo'
import BurgerMenu from '../UI/Menu/BurgerMenu'
import SearchIcon from '../UI/SearchIcon/SerchIcon'
import AuthUserIcon from '../UI/AuthUserIcon/AuthUserIcon'

import { useActions } from '../../../../hooks/useActions'
import { useAppSelector } from 'hooks/redux'
import { Favirites } from '../UI/Favirites/Favirites'
import { useMatchMedia } from '../../hooks/useMatchMedia'

interface NaviagationsProps {
	mobileNavigations: any
	dekstopNavigations: any
}

export const Naviagations: FC<NaviagationsProps> = ({
	mobileNavigations,
	dekstopNavigations
}) => {
	const location = useLocation()
	const { isAuth } = useAppSelector(state => state.AuthReducer)
	const { visbleMobileNavigation } = useAppSelector(
		state => state.visbleModalReducer
	)
	const {
		setLogout,
		setVisbleSearchModal,
		setVisbleRegistrationModal,
		setVisbleMobileNavigation
	} = useActions()

	const { isMobile } = useMatchMedia()
	const setAuth = () => {
		isAuth
			? setVisbleRegistrationModal(false)
			: setVisbleRegistrationModal(true)
		setLogout()
	}

	const handleVisbleMobileNavigations = () => {
		visbleMobileNavigation
			? setVisbleMobileNavigation(false)
			: setVisbleMobileNavigation(true)
	}

	useEffect(() => {
		setVisbleMobileNavigation(false)
	}, [location.pathname])

	return (
		<>
			<Container center>
				<div className={cl.nav}>
					<div className={cl.nav__list}>
						<div className={cl.nav__logo}>
							<Link to='/'>
								<Logo />
							</Link>
						</div>
						<>{dekstopNavigations}</>
					</div>
					<div className={cl.nav__icons}>
						<div
							className={cl.nav__serch}
							onClick={() => {
								setVisbleSearchModal(true)
								setVisbleMobileNavigation(false)
							}}
						>
							<SearchIcon />
						</div>
						{isAuth && (
							<NavLink to={'/favorites'} className={cl.nav__favorites}>
								<Favirites />
							</NavLink>
						)}

						<div
							className={cl.nav__auth}
							onClick={() => {
								setAuth()
							}}
						>
							<AuthUserIcon />
						</div>
						<div className={cl.nav__menu}>
							<BurgerMenu
								visbleMobileNavigation={visbleMobileNavigation}
								handleVisble={() => handleVisbleMobileNavigations()}
							/>
						</div>
					</div>
				</div>
			</Container>
			{isMobile && mobileNavigations}
		</>
	)
}
