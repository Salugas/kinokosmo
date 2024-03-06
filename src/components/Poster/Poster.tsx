import styled from 'styled-components'

import { Loader } from 'components/Loader/Loader'
import { Rating } from 'components/Rating/Rating'
import { FC } from 'react'
import { Link } from 'react-router-dom'

const StyledPoster = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	width: ${(props: any) => props.width || ''};
	height: ${(props: any) => props.height || '60rem'};

	transform: scale(0.95);
	transition: transform 0.3s ease-in;

	cursor: pointer;

	& > a {
		color: white;
	}

	&:hover {
		transform: scale(0.99);
		transition: all 0.3s ease-in;
	}

	&:hover .poster__ageRatingAndYear,
	&:hover .poster__name,
	&:hover .poster__year,
	&:hover .poster__rating,
	&:hover .poster__agerating {
		transition: opacity 0.3s ease-in;
		opacity: 1;
	}

	&:hover img {
		border: 0.1rem solid rgb(132, 132, 132);
		opacity: 0.3;
		transition: all 0.3s ease-in;
	}

	& img {
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: -1;
		object-fit: cover;
		object-position: center;
		border-radius: 8%;
		border: 0.1rem solid rgb(53, 53, 53);
		transform: scale(1);
		transition: transform, border, opacity 0.3s ease-in;
		cursor: pointer;
	}

	.poster__ageRatingAndYear {
		display: flex;
		column-gap: 2rem;

		padding: 2rem;
		bottom: 2rem;

		width: 100%;
		font-size: 2rem;
		font-weight: 400;
	}

	.poster__ageRatingAndYear,
	.poster__name,
	.poster__rating {
		position: absolute;
		transition: opacity 0.3s ease-in;
		opacity: 0;
	}

	.poster__name {
		padding: 2rem;
		word-wrap: break-word;

		bottom: 5rem;

		width: 100%;
		font-weight: 500;
		font-size: 2rem;

		@media (max-width: 767px) {
			font-size: 1.2rem;
			bottom: 1rem;
		}
	}

	.poster__rating {
		font-size: 2rem;
		right: ${(props: any) => props.right};
		top: 4rem;
	}

	.poster__ageRatingAndYear,
	.poster__rating {
		@media (max-width: 767px) {
			display: none;
		}
	}
`

interface PosterProps {
	id: any
	url: string | undefined
	name: string | undefined
	rating?: number | undefined
	ratingColor?: string
	year?: number | undefined
	ageRating?: number | undefined

	height?: string
	width?: string
	right?: string

	isLoading?: boolean
}

export const Poster: FC<PosterProps> = ({ ...props }) => {
	return (
		<StyledPoster {...props}>
			<Link to={`/movies/${props.id}`}>
				{props.rating !== 0 && (
					<div className='poster__rating'>
						<Rating padding='1.5rem' backgroundColor={props.ratingColor}>
							{props.rating && props.rating.toFixed(1)}
						</Rating>
					</div>
				)}
				<div className='poster__name'>{props.name}</div>
				<div className={'poster__ageRatingAndYear'}>
					<div className={'poster__year'}>{props.year}</div>
					{props.ageRating && (
						<div className={'poster__ageRating'}>{props.ageRating + '+'}</div>
					)}
				</div>
				{!props.url ? (
					<img src={props.url} alt='' />
				) : (
					<img src={props.url} alt='' />
				)}
			</Link>
		</StyledPoster>
	)
}
