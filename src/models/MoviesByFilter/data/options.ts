import { currentYear } from 'helpers/currentYear'

const reting = {
	typeName: 'жанры',
	typeValue: 'genre',
	option: [
		{ name: 'все', value: 'все', type: 'genre' },
		{ name: 'приключения', value: 'приключения', type: 'genre' },
		{ name: 'фантастика', value: 'фантастика', type: 'genre' },
		{ name: 'триллеры', value: 'триллер', type: 'genre' },
		{ name: 'боевики', value: 'боевик', type: 'genre' },
		{ name: 'комедии', value: 'комедия', type: 'genre' },
		{ name: 'мелодрамы', value: 'мелодрама', type: 'genre' },
		{ name: 'аниме', value: 'аниме', type: 'genre' },
		{ name: 'криминал', value: 'криминал', type: 'genre' },
		{ name: 'вестерн', value: 'вестерн', type: 'genre' },
		{ name: 'детский', value: 'для детей', type: 'genre' },
		{ name: 'фильм-нуар', value: 'фильм-нуар', type: 'genre' },
		{ name: 'спорт', value: 'спорт', type: 'genre' },
		{ name: 'документальный', value: 'документальные', type: 'genre' },
		{ name: 'фэнтези', value: 'фэнтези', type: 'genre' },
		{ name: 'детектив', value: 'детективы', type: 'genre' },
		{ name: 'семейный', value: 'семейный', type: 'genre' }
	]
}

const genre = {
	typeName: 'рейтинг',
	typeValue: 'rating',
	option: [
		{ name: 'любой рейтинг', value: '1-10', type: 'rating' },
		{ name: 'больше 9', value: '9-10', type: 'rating' },
		{ name: 'больше 8', value: '8-10', type: 'rating' },
		{ name: 'больше 7', value: '7-10', type: 'rating' },
		{ name: 'больше 6', value: '6-10', type: 'rating' },
		{ name: 'больше 5', value: '5-10', type: 'rating' }
	]
}

const year = {
	typeName: 'годы выхода',
	typeValue: 'year',
	option: [
		{ name: 'все годы', value: `0-${currentYear()}`, type: 'year' },
		{ name: '2022-2023', value: '2022-2023', type: 'year' },
		{ name: '2020-2021', value: '2020-2021', type: 'year' },
		{ name: '2014-2019', value: '2014-2019', type: 'year' },
		{ name: '2010-2014', value: '2010-2014', type: 'year' },
		{ name: '2000-2009', value: '2000-2009', type: 'year' },
		{ name: '1990-1999', value: '1990-1999', type: 'year' },
		{ name: '1980-1989', value: '1980-1989', type: 'year' },
		{ name: '1970-1979', value: '1970-1979', type: 'year' },
		{ name: '1960-1969', value: '1960-1969', type: 'year' },
		{ name: 'до 1959', value: '0-1959', type: 'year' }
	]
}

const sort = {
	typeName: 'рекомендуемые',
	typeValue: 'sort',
	option: [
		{ name: 'по рейтингу', value: 1, type: 'sort' },
		{ name: 'по дате выхода', value: 1, type: 'sort' }
	]
}

export const options = [reting, genre, year]
