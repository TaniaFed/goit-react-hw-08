import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../../redux/auth/selectors'
import { logOut } from '../../redux/auth/operations'
import { RiLogoutCircleRLine } from 'react-icons/ri'
import css from './UserMenu.module.css'

export default function UserMenu() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  const handleLogout = () => {
    dispatch(logOut())
  }

  return (
    <div className={css.wrapper}>
      <p className={css.username}>
        <span className={css.span}>Welcome,</span>
        {user.name}
      </p>
      <button className={css.logoutBtn} type="button" onClick={handleLogout}>
        <RiLogoutCircleRLine />
      </button>
    </div>
  )
}
