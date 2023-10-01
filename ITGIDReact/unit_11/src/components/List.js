import React from 'react'

const List = (data) => {
  console.log()
  return (
    <div>
      <ul>
        {data.user.map((el) => (
          <li key={el.name + el.age}>
            <hr />
            <p>passport: {el.passport}</p>
            <p>name: {el.name}</p>
            <p>age: {el.age}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List
