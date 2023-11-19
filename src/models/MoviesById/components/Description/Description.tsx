import React, { FC } from 'react'
import cl from './Description.module.scss'

interface DescriptionProps {
	description: string | undefined
}

export const Description: FC<DescriptionProps> = ({ description }) => {
	return <div className={cl.description}>{description}</div>
}
