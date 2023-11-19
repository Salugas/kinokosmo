import cl from './PaginationButton.module.scss'

import { FC, PropsWithChildren } from 'react'

interface PaginationButtonProps {
	onClick?: () => void
}

export const PaginationButton: FC<PropsWithChildren<PaginationButtonProps>> = ({
	children,
	...props
}) => {
	return (
		<div className={cl.button} {...props}>
			{children}
		</div>
	)
}
