import cl from './Loader.module.scss'
import styled from 'styled-components'
import { FC } from 'react'

const StyledLoader = styled.div`
	width: ${(props: any) => props.width || '18rem'};
	height: ${(props: any) => props.height || '18rem'};
`

interface LoaderProps {
	width?: string
	height?: string
}

export const Loader: FC<LoaderProps> = ({ ...props }) => {
	return <StyledLoader {...props} className={cl.loader}></StyledLoader>
}
