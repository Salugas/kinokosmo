import cl from './Movies.module.scss'

import { FC } from 'react'
import { IMovies } from 'types/IMovies'
import { Backdrop } from '../Backdrop/Backdrop'
import { Rating } from 'components/Rating/Rating'
import { calcRating } from 'helpers/calcRating'

interface MoviesItemProps {
	item: IMovies
}

export const MoviesItem: FC<MoviesItemProps> = ({ item }) => {
	const genre = item.genres[0].name

	const ratingColor = calcRating(item.rating.kp)
	return (
		<div className={cl.wrapper}>
			<div className={cl.backdrop}>
				<Backdrop backdrop={item.backdrop.url} />
			</div>
			<div className={cl.info}>
				<div className={cl.name}>{item.name}</div>
				<div className={cl['sub-info']}>
					<div className={cl.rating}>
						<Rating backgroundColor={ratingColor} padding='1rem'>
							{item.rating.kp.toFixed(1)}
						</Rating>
					</div>
					<div>{item.year}</div>
					<div className={cl.genre}>{genre}</div>
				</div>
			</div>
		</div>
	)
}
