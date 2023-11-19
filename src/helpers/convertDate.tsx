export const convertDate = (birthday: Date | undefined) => {
	let munth = ''

	const munthNum = birthday && new Date(birthday).getMonth()
	const year = birthday && new Date(birthday).getUTCFullYear()
	const day = birthday && new Date(birthday).getDate()

	switch (munthNum) {
		case 0:
			munth = 'Января'
			break
		case 1:
			munth = 'Февраля'
			break
		case 2:
			munth = 'Марта'
			break
		case 3:
			munth = 'Апреля'
			break
		case 4:
			munth = 'Мая'
			break
		case 5:
			munth = 'Июня'
			break
		case 6:
			munth = 'Июля'
			break
		case 7:
			munth = 'Августа'
			break
		case 8:
			munth = 'Сентября'
			break
		case 9:
			munth = 'Октября'
			break
		case 10:
			munth = 'Ноября'
			break
		case 11:
			munth = 'Декабря'
			break
	}

	const dateBirthday = ` ${day} ${munth} ${year} года`

	return dateBirthday
}
