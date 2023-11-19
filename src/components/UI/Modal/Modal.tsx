import { FC, PropsWithChildren } from 'react'
import cl from './Modal.module.scss'
import styled from 'styled-components'

interface ModalProps {
	onClick?: () => void
	position?: string
	overflowY?: string
}

const StyledModal = styled.div`
	position: ${(props: any) => props.position || 'fixed'};
	overflow-y: ${(props: any) => props.overflowY};
`

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
	children,
	...props
}) => {
	return (
		<StyledModal {...props} className={cl.modal}>
			{children}
		</StyledModal>
	)
}
