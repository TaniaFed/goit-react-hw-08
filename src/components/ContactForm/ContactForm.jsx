import { useDispatch } from 'react-redux'
import { addContact } from '../../redux/contacts/operations'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { formatPhoneNumber, formatName } from '../../helpers'
import * as Yup from 'yup'
import css from './ContactForm.module.css'

const initialValues = {
  name: '',
  number: '',
}

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(/^\+?\d{1}\s?\(\d{3}\)\s?\d{3}-\d{4}$/, 'Format: x(xxx) xxx-xxxx')
    .required('Required'),
})

export default function ContactForm() {
  const dispatch = useDispatch()

  const handleAdd = (values, { resetForm }) => {
    dispatch(addContact(values))
    resetForm()
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleAdd}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label className={css.label}>Name</label>
        <Field
          className={css.field}
          type="text"
          name="name"
          id="id"
          onInput={(e) => {
            e.target.value = formatName(e.target.value)
          }}
        />
        <ErrorMessage className={css.error} name="name" component="span" />
        <label className={css.label}>Number</label>
        <Field
          className={css.field}
          type="text"
          name="number"
          id="number"
          onInput={(e) => {
            e.target.value = formatPhoneNumber(e.target.value)
          }}
        />
        <ErrorMessage className={css.error} name="number" component="span" />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  )
}
