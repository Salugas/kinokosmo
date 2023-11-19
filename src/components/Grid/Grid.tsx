import cl from './Grid.module.scss'
import { FC, PropsWithChildren } from 'react'

export const Grid: FC<PropsWithChildren> = ({ children }) => {
	return <div className={cl.grid}>{children}</div>
}
