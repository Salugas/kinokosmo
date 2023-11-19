import cl from './PaginationButton.module.scss'
import { FC, PropsWithChildren } from 'react'

interface PaginationButtonProps {
	onClick: () => void
}

export const PaginationButton: FC<PropsWithChildren<PaginationButtonProps>> = ({
	children,
	onClick
}) => {
	return (
		<div className={cl.button} onClick={() => onClick()}>
			{children}
		</div>
	)
}
