import { useState } from 'react'

function Login() {
  const [data, setData] = useState({ userName: '', password: '' })

  function hendleFormSubmit(event) {
    event.preventDefault()

    alert(JSON.stringify(data))
  }

function hendleInputChange(e, name) {
  setData({ ...data, [name]: e.target.value })
}

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={hendleFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            onChange={(event) =>
             hendleInputChange(event, 'userName')
            }
            value={data.userName}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={data.password}
            onChange={(event) =>
              hendleInputChange(event, 'password')
            }
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login
