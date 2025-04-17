import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ContactList from '../../components/ContactList/ContactList'
import { fetchContacts } from '../../redux/contacts/operations'
import { selectLoading } from '../../redux/contacts/selectors'
import css from './ContactsPage.module.css'
import ContactForm from '../../components/ContactForm/ContactForm'

export default function ContactsPage() {
  const dispatch = useDispatch()
  const isLoading = useSelector(selectLoading)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <div className={css.container}>
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactForm />
      <title className={css.title}>Your Contacts</title>
      <ContactList />
    </div>
  )
}
