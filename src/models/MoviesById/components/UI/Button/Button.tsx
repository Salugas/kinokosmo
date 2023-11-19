import styled from 'styled-components'
import cl from './Button.module.scss'

import { FC, PropsWithChildren } from 'react'

interface ButtonProps {
	background: 'grey' | 'blue'
	onClick?: () => any
}

const color = {
	blue: 'linear-gradient(to left, rgb(29, 78, 216), rgb(30, 64, 175), rgb(17, 24, 39))',
	grey: 'linear-gradient(239deg, rgba(80,80,80,1) 0%, rgba(38,38,38,1) 100%);'
}

const StyleButton = styled.div`
	background: ${(props: any) =>
		(props.background == 'grey' && color.grey) ||
		(props.background == 'blue' && color.blue)};
`

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
	children,
	...props
}) => {
	return (
		<StyleButton {...props} className={cl.button}>
			{children}
		</StyleButton>
	)
}
