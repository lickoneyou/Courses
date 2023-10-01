function Login() {
  function hendleFormSubmit(event) {
    event.preventDefault()

    const userData = {
      username: event.target.username.value,
      password: event.target.password.value,
    }
    alert(JSON.stringify(userData))
  }
  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={hendleFormSubmit}>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login
