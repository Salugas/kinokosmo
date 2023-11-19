import cl from './ActorAndPruducer.module.scss'

import { FC } from 'react'
import { Link } from 'react-router-dom'
import { IMoviesPersons } from 'types/IMovies'

interface ActorAndPruducerProps {
	persons: IMoviesPersons[] | undefined
}

export const ActorAndPruducer: FC<ActorAndPruducerProps> = ({ persons }) => {
	const mockDirector =
		persons &&
		persons.filter(item => item.enProfession == 'director').slice(0, 1)

	const mockActors =
		persons && persons.filter(item => item.enProfession == 'actor').slice(0, 3)

	return (
		<div className={cl.wrapper}>
			<div className={cl.persons}>
				<span>Режиссер:</span>

				{mockDirector?.map(item => (
					<Link to={`/persons/${item.id}`}>{item.name}</Link>
				))}
			</div>
			<div className={cl.persons}>
				<span>Актеры:</span>
				<div className={cl.persons__name}>
					{mockActors?.map(item => (
						<Link key={item.id} to={`/persons/${item.id}`}>
							{item.name}
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}
