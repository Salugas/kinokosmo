import cl from './PersonsById.module.scss'

import Container from 'components/Сontainer/Container'
import { Profile } from '../Profile/Profile'
import { useParams } from 'react-router-dom'
import { PersonsByIdAPI } from '../../API/PersonsByIdAPI'
import { MoviesList } from '../Movies/MoviesList'
import { FactsList } from 'components/Facts/FactsList'

export const PersonsById = () => {
	const { id } = useParams()

	const { data: persons } = PersonsByIdAPI.useFetchPersonsByIdQuery(id)

	return (
		<Container center>
			<div className={cl.wrapper}>
				<div className={cl.info}>
					<Profile
						birthday={persons?.birthday}
						enName={persons?.enName}
						name={persons?.name}
						photo={persons?.photo}
						profession={persons?.profession}
					/>
					<MoviesList movies={persons?.movies}></MoviesList>
					<FactsList facts={persons?.facts}></FactsList>
				</div>
			</div>
		</Container>
	)
}
