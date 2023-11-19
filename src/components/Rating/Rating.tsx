import '../../style/global.scss'
import styled from 'styled-components'

import React, { FC } from 'react'

interface RatingProps {
	backgroundColor: string | undefined
	padding: string
	children: React.ReactNode
}

const StyledRating = styled.div`
	padding: ${(props: any) => props.padding};
	width: fit-content;
	border-radius: 10%;
	font-weight: 500;
	background-color: ${(props: any) => props.backgroundColor};
`

export const Rating: FC<RatingProps> = ({ children, ...props }) => {
	return <StyledRating {...props}>{children}</StyledRating>
}
