import { Link, useNavigate } from 'react-router-dom'
import courses from '../data/courses'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { useEffect, useState } from 'react'

const SORT_KEYS = ['tittle', 'slag', 'id']

function sortCourses(courses, key) {
  const sortedCourses = [...courses]
  if (!key || !SORT_KEYS.includes(key)) {
    return sortedCourses
  }
  sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1))
  return sortedCourses
}

const Courses = () => {
  const location = useLocation()
  let query = queryString.parse(location.search)
  const [sortKey, setSortKey] = useState(query.sort)
  const [sortedCourses, setSortedCourses] = useState(
    sortCourses(courses, sortKey),
  )
  const nav = useNavigate()
  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      nav('.')
      setSortKey()
      setSortedCourses([...courses])
    }
  }, [nav, sortKey])

  return (
    <>
      <h1>{sortKey ? `Sorted by ${sortKey}` : `Courses`}</h1>
      {sortedCourses.map((el) => (
        <div key={el.id}>
          <Link to={`/courses/${el.slug}`} className="courseLink">
            {el.title}
          </Link>
        </div>
      ))}
    </>
  )
}

export default Courses
