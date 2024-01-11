import persons from '../data/persons'
import Person from './Person'

function Persons() {
  return (
    <div className='cards'>
      {persons.map((el) => {
        return <Person {...el} key={el.id}></Person>
      })}
    </div>
  )
}

export default Persons
