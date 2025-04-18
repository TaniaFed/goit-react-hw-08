import { BiSolidContact } from 'react-icons/bi'
import css from './HomePage.module.css'

export default function HomePage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Welcome to your personal contacts assistent app!
      </h1>
      <BiSolidContact size={65} />
    </div>
  )
}
