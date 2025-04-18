import { useSelector, useDispatch } from 'react-redux'
import { selectNameFilter } from '../../redux/filters/selectors'
import { changeFilter } from '../../redux/filters/slice'
import css from './SearchBox.module.css'
import { useState } from 'react'

export default function SearchBox() {
  const dispatch = useDispatch()
  const value = useSelector(selectNameFilter)

  const [showSearchForm, setShowSearchForm] = useState(false)

  const toggleSearchForm = () => {
    setShowSearchForm((prev) => !prev)
  }

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value))
  }

  return (
    <div className={css.search}>
      <button onClick={toggleSearchForm} className={css.searchFormBtn}>
        {showSearchForm ? 'Hide search' : 'Open search'}
      </button>
      {showSearchForm && (
        <div className={css.searchBar}>
          <p className={css.label}>Search by name</p>
          <input
            id="searchId"
            className={css.input}
            type="text"
            value={value}
            placeholder="Search..."
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  )
}
