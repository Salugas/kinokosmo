import { FC } from 'react'

import { BsBookmarkStar } from 'react-icons/bs'
import { CiBookmark } from 'react-icons/ci'
import { Button } from '../UI/Button/Button'
import { useActions } from 'hooks/useActions'
import { IMovies } from 'types/IMovies'
import { useAppSelector } from 'hooks/redux'

interface FavoritesButtonsProps {
	movie: IMovies | undefined
	movieId: number | undefined
}

export const FavoritesButton: FC<FavoritesButtonsProps> = ({
	movieId,
	movie
}) => {
	const { setAddFavoritesMovies, setWarningFavoritesMovies } = useActions()

	const { isWarning } = useAppSelector(state => state.favoritesMoviesReducer)
	const { id } = useAppSelector(state => state.favoritesMoviesReducer)
	const { isAuth } = useAppSelector(state => state.AuthReducer)

	const handleFavorites = () => {
		movie && isAuth && setAddFavoritesMovies(movie)
		if (!isAuth) {
			setWarningFavoritesMovies('Войдите, чтобы добавить в')
			if (isWarning == '') {
				setTimeout(() => {
					setWarningFavoritesMovies('')
				}, 2600)
			}
		}
	}

	return (
		<Button onClick={() => handleFavorites()} background={'grey'}>
			{movieId && id.includes(movieId) && isAuth ? (
				<BsBookmarkStar size={'3.2rem'} />
			) : (
				<CiBookmark size={'3.2rem'} />
			)}
		</Button>
	)
}
