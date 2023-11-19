import cl from './MainPage.module.scss'

import { GenresList } from 'models/Genres'
import { GenresMovies } from 'models/GenresMovies'
import { Top10MoviesCarusel } from 'models/Top10MoviesCarusel'

const MainPage = () => {
	return (
		<div className={cl.main}>
			<Top10MoviesCarusel />
			<GenresList />
			<GenresMovies />
		</div>
	)
}

export default MainPage
