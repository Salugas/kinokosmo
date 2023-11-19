import { FC, useEffect, useRef } from 'react'
import cl from './BurgerMenu.module.scss'

interface BurgerMenuProps {
	handleVisble: () => void
	visbleMobileNavigation: boolean
}

const BurgerMenu: FC<BurgerMenuProps> = ({
	handleVisble,
	visbleMobileNavigation
}) => {
	const topRef = useRef<HTMLDivElement>(null)
	const middleRef = useRef<HTMLDivElement>(null)
	const bottomRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (visbleMobileNavigation) {
			topRef?.current?.classList.add(cl.active)
			middleRef?.current?.classList.add(cl.active)
			bottomRef?.current?.classList.add(cl.active)
		} else {
			topRef?.current?.classList.remove(cl.active)
			middleRef?.current?.classList.remove(cl.active)
			bottomRef?.current?.classList.remove(cl.active)
		}
	}, [visbleMobileNavigation])

	return (
		<div className={cl.menu} onClick={() => handleVisble()}>
			<div ref={topRef} className={cl.menu__item__top}></div>
			<div ref={middleRef} className={cl.menu__item__middle}></div>
			<div ref={bottomRef} className={cl.menu__item__bottom}></div>
		</div>
	)
}

export default BurgerMenu
