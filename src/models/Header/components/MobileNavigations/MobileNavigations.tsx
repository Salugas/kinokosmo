import { useEffect, useRef } from 'react'
import Links from '../Links/Links'
import cl from './MobileNavigations.module.scss'
import { useAppSelector } from 'hooks/redux'
import { useActions } from 'hooks/useActions'

export const MobileNavigations = () => {
	const navRef = useRef<HTMLDivElement>(null)

	const { setVisbleMobileNavigation } = useActions()
	const { visbleMobileNavigation } = useAppSelector(
		state => state.visbleModalReducer
	)

	const closeNavigations = () => {
		setVisbleMobileNavigation(false)
	}

	useEffect(() => {
		setTimeout(() => {
			if (visbleMobileNavigation) {
				navRef?.current?.classList.add(cl.active)
			} else {
				navRef?.current?.classList.remove(cl.active)
			}
		}, 1)
	}, [visbleMobileNavigation])

	return (
		<div ref={navRef} className={cl.wrapper}>
			<div className={cl.nav}>
				<Links closeNavigations={() => closeNavigations()} />
			</div>
		</div>
	)
}
