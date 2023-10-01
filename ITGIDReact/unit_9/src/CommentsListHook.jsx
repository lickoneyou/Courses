import React, { useEffect, useState } from 'react'

const CommentsListHook = (props) => {
  const [data, setData] = useState([])

  useEffect(() => {
    console.log('effect')
    if (props.data.length > 0) setData(props.data)
  }, [props])

  const onlyEven = () => {
    console.log(data)
    setData(data.filter((el) => el.id % 2 === 0))
  }

  return (
    <div>
      <div>
        <button onClick={onlyEven}>Only even comments</button>
      </div>
      {data.map((el, index) => (
        <section key={el.id}>
          <p>
            <b>
              {index + 1}. {el.email}
            </b>
          </p>
          <p>{el.body}</p>
        </section>
      ))}
    </div>
  )
}

export default CommentsListHook
