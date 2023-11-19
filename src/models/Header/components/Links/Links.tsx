import cl from './Links.module.scss'

import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { types } from '../../data/types'

interface LinksProps {
	closeNavigations?: (() => void) | undefined
}

const Links: FC<LinksProps> = ({ closeNavigations }) => {
	return (
		<>
			{types.map(type => (
				<NavLink
					key={type.path}
					to={`/${type.path}`}
					onClick={() => closeNavigations && closeNavigations()}
					className={({ isActive }) =>
						isActive ? `${cl.links}  ${cl.active}` : `${cl.links}`
					}
				>
					{type.name}
				</NavLink>
			))}
		</>
	)
}

export default Links
