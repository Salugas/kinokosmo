import cl from './SerchInput.module.scss'

import React from 'react'

interface SearchInputProps {
	placeholder: string
	type: string
	query: string
	onChange: () => void
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
	(props, searchRef) => {
		return (
			<form className={cl.input}>
				<input
					ref={searchRef}
					name='search'
					onChange={props.onChange}
					type={props.type}
					placeholder={props.placeholder}
					value={props.query}
				/>
			</form>
		)
	}
)

export default SearchInput
