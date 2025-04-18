import { useSelector } from 'react-redux'
import Contact from '../Contact/Contact'
import { selectFilteredContacts } from '../../redux/contacts/selectors'
import styles from './ContactList.module.css'

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts)

  return (
    <div className={styles.box}>
      <ul className={styles.list}>
        {filteredContacts.map((contact) => (
          <li className={styles.item} key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  )
}
