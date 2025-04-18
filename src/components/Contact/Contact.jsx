import { useDispatch } from 'react-redux'
import { deleteContact } from '../../redux/contacts/operations'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoPersonSharp } from 'react-icons/io5'
import { RiDeleteBin2Line } from 'react-icons/ri'
import css from './Contact.module.css'

const Contact = ({ contact }) => {
  const dispatch = useDispatch()

  const handleDelete = () => dispatch(deleteContact(contact.id))

  return (
    <div className={css.container}>
      <div className={css.box}>
        <div className={css.nameBox}>
          <IoPersonSharp className={css.icon} />
          <p className={css.name}>{contact.name}</p>
        </div>
        <div className={css.numberBox}>
          <FaPhoneAlt className={css.icon} />
          <p className={css.number}>{contact.number}</p>
        </div>
      </div>
      <button className={css.btn} onClick={handleDelete}>
        <RiDeleteBin2Line />
      </button>
    </div>
  )
}

export default Contact
