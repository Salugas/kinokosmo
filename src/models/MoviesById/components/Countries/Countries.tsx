import { FC } from 'react'

interface CountriesProps {
	countries: { name: string }[] | undefined
}

export const Countries: FC<CountriesProps> = ({ countries }) => {
	return <div>{countries && countries[0].name}</div>
}
