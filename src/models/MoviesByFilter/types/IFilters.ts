export interface IOptions {
	name: string
	value: string | number
	type: string
}

export interface ISelect {
	typeName: string
	typeValue: string
	option: IOptions[]
}

export interface IFilters {
	rating: string
	year: string
	genre: string
}

export interface ISort {
	year: number | null
	rating: number | null
}
