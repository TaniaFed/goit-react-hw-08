import { lazy, Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from '../PrivateRoute'
import RestrictedRoute from '../RestrictedRoute'
import { refreshUser } from '../../redux/auth/operations'
import css from './App.module.css'
import { selectIsRefreshing } from '../../redux/auth/selectors'
import Layout from '../Layout/Layout'
import { Commet, ThreeDot } from 'react-loading-indicators'

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'))
const RegistrationPage = lazy(() =>
  import('../../pages/RegistrationPage/RegistrationPage')
)
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'))
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'))
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'))

export default function App() {
  const dispatch = useDispatch()
  const isRefreshing = useSelector(selectIsRefreshing)

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return isRefreshing ? (
    <div className={css.refresh}>
      <ThreeDot
        text="Getting user data, please wait..."
        textColor="#2d737c"
        variant="bounce"
        color="#80abab"
        size="Large"
      />
    </div>
  ) : (
    <Layout>
      <Suspense
        fallback={
          <div className={css.loading}>
            <Commet
              color="#80abab"
              size="large"
              text="Loading..."
              textColor="#2d737c"
            />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}
