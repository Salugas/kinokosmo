import styled from 'styled-components'
import { FC, PropsWithChildren } from 'react'

interface CloseProps {
	position?: string
	left?: string
	width: string
	height: string
	ABwidth?: string
	ABheight?: string

	onClick?: () => any
}

const StyledClose = styled.div`
	position: ${(props: any) => props.position};
	width: ${(props: any) => props.width};
	height: ${(props: any) => props.height};
	z-index: 999;
	cursor: pointer;

	&::after,
	&::before {
		content: '';
		position: absolute;
		width: ${(props: any) => props.ABwidth};
		height: ${(props: any) => props.ABheight};

		left: ${(props: any) => props.left};

		background-color: rgb(199, 199, 199);

		cursor: pointer;
	}

	&::after {
		transform: rotate(45deg);
	}
	&::before {
		transform: rotate(-45deg);
	}
`

export const Close: FC<PropsWithChildren<CloseProps>> = ({ ...props }) => {
	return <StyledClose {...props}></StyledClose>
}
