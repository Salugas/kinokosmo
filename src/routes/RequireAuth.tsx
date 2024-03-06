// import { FC, PropsWithChildren } from 'react'
// import { Navigate, useLocation } from 'react-router-dom'

// import { useAppSelector } from 'hooks/redux'

// const RequireAuth: FC<PropsWithChildren> = ({ children }) => {
// 	const location = useLocation()
// 	const { isAuth } = useAppSelector(state => state.AuthReducer)

// 	if (!isAuth) {
// 		return <Navigate to={'/'} state={{ from: location }} />
// 	}
// 	return children
// }
// export default RequireAuth
const auth = () => {
	return <></>
}
