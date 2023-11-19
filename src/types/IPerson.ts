export interface IPersonMovies {
	id: number
	name: string
	alternativeName: string
	rating: number
	general: boolean
	description: string
	enProfession: string
}

export interface IPerson {
	id: number
	photo: string
	name: string
	enName: string
	description: string
	enProfession: string
	birthday: Date
	death: string
	age: number
	profession: { value: string }[]
	facts: { value: string }[]
	movies: IPersonMovies[]
}
