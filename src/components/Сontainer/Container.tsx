import React, { FC } from 'react'
import styled from 'styled-components'

interface ContainerProps {
	children: React.ReactNode
	center?: boolean
	left?: boolean
}

const StyledContainer = styled.div`
${(props: any) =>
	props.center &&
	`display: flex;
	flex-direction: column;
	margin:  0 auto;
	
	max-width: 160rem ;
	padding: 0rem 1.5rem;
	
	position: relative;`}
${(props: any) =>
	props.left &&
	`padding-left: 15rem;
	@media (max-width: 1024px) {
		padding: 0 1.5rem;
	}`}

}

`

const Container: FC<ContainerProps> = ({ children, ...props }) => {
	return <StyledContainer {...props}>{children}</StyledContainer>
}

export default Container
