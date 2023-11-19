import cl from './SearchIcon.module.scss'

import { CiSearch } from 'react-icons/ci'

const SearchIcon = () => {
	return (
		<span className={cl.search}>
			<div className={cl.line}></div>
			<CiSearch className={cl.icon} />
		</span>
	)
}

export default SearchIcon
