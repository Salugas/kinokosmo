import { FC } from 'react'

interface CountriesProps {
	movieLength: number | undefined
}

export const MovieLength: FC<CountriesProps> = ({ movieLength }) => {
	let min: any = movieLength && movieLength % 60
	let hour: any = movieLength && (movieLength - min) / 60

	const date = movieLength
		? `${hour == 0 ? '' : hour + ' ч'} ${min == 0 ? '' : min + ' мин'}`
		: ''

	return <div>{date}</div>
}
