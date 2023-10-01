import courses from '../data/courses'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

const SingleCourse = () => {
  const params = useParams()
  const course = courses.find((el) => el.slug === params.slug)
  const navigate = useNavigate()

  useEffect(() => {
    if (!course) {
      navigate('..', { relative: 'path' })
    }
  }, [course, navigate])

  return (
    <>
      <h1>{course?.title}</h1>
      <h2>{course?.slug}</h2>
      <h3>{course?.id}</h3>
      <Link to="../courses">All Courses</Link>
    </>
  )
}

export default SingleCourse
