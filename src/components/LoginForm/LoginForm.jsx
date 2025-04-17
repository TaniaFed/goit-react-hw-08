import { useDispatch } from 'react-redux'
import { logIn } from '../../redux/auth/operations'
import { Formik, Form, Field } from 'formik'
import css from './LoginForm.module.css'

export const LoginForm = () => {
  const dispatch = useDispatch()

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
    actions.resetForm()
  }

  // додавати тости тут...

  // const handleSubmit = (values, actions) => {
  //   dispatch(logIn(values))
  //     .unwrap()
  //     ..then(() => {
  //       Navigate('/contacts')
  //     }).catch((err) => {
  //       return err.message;
  //     });
  //   actions.resetForm()
  // }

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field type="email" name="email" className={css.input} />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" className={css.input} />
        </label>
        <button type="submit" className={css.submitBtn}>
          Log In
        </button>
      </Form>
    </Formik>
  )
}
