import cl from './Top10MoviesCarusel.module.scss'

import { Top10MoviesAPI } from 'models/Top10MoviesCarusel/API/Top10MoviesAPI'
import { MoviesList } from '../Movies/MoviesList'

export const Top10MoviesCarusel = ({}) => {
	const { data } = Top10MoviesAPI.useFetchTop10MoviesQuery({})

	const { docs: movies }: any = { ...data }

	return (
		<div className={cl.wrapper}>
			<MoviesList movies={movies} />
		</div>
	)
}
