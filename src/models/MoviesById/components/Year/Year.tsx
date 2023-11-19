import { FC } from 'react'

interface YearProps {
	year: number | undefined
}

export const Year: FC<YearProps> = ({ year }) => {
	return <div>{year}</div>
}
