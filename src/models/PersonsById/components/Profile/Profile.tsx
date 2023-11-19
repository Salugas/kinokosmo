import cl from './Profile.module.scss'

import { FC } from 'react'
import { Name } from '../Name/Name'
import { Photo } from '../Photo/Photo'
import { ProfessionList } from '../Profession/ProfessionList'
import { Birthday } from '../Birthday/Birthday'

interface ProfileProps {
	photo: string | undefined
	name: string | undefined
	enName: string | undefined
	profession: { value: string }[] | undefined
	birthday: Date | undefined
}

export const Profile: FC<ProfileProps> = ({
	birthday,
	enName,
	name,
	photo,
	profession
}) => {
	return (
		<div className={cl.wrapper}>
			<div>
				<Photo photo={photo} />
			</div>
			<div className={cl.info}>
				<Name name={name} enName={enName} />
				<ProfessionList profession={profession} />
				<Birthday birthday={birthday} />
			</div>
		</div>
	)
}
