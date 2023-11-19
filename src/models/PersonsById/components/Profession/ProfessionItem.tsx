import { FC } from 'react'

interface ProfessionItemProps {
	item: string | undefined
}

export const ProfessionItem: FC<ProfessionItemProps> = ({ item }) => {
	return <div>{item}</div>
}
