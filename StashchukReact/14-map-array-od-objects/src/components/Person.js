function Person({ id, firstName, lastName, email, img }) {
  return (
    <div className="card">
      <img src={img} alt={`${id}${lastName}`}></img>
      <h3>
        {firstName} {lastName} {id}
      </h3>
      <h4>{email}</h4>
    </div>
  )
}

export default Person
