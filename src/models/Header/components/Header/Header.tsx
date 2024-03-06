import cl from './Header.module.scss'

import { useRef, useState } from 'react'
import { Naviagations } from '../Navigations/Navigations'
import { currentScroll } from 'models/Header/hooks/currentScroll'
import { DekstopNavigations } from '../DekstopNavigations/DekstopNavigations'
import { MobileNavigations } from '../MobileNavigations/MobileNavigations'
import { useAppSelector } from 'hooks/redux'
import { useMatchMedia } from 'models/Header/hooks/useMatchMedia'

export const Header = () => {
	const { visbleRigistration } = useAppSelector(
		state => state.visbleModalReducer
	)
	const [visble, setVisble] = useState()
	const visbleRef = useRef<HTMLDivElement>(null)

	const { isMobile } = useMatchMedia()

	currentScroll(setVisble)

	if (visble === false && !isMobile) {
		visbleRef.current?.classList.add(cl.active)
	} else {
		visbleRef.current?.classList.remove(cl.active)
	}

	return (
		<>
			{!visbleRigistration && (
				<div ref={visbleRef} className={cl.header}>
					<Naviagations
						dekstopNavigations={<DekstopNavigations />}
						mobileNavigations={<MobileNavigations />}
					/>
				</div>
			)}
		</>
	)
}
