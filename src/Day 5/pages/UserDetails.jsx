
import { Link, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'


function UserDetails() {
  const {id} = useParams()
  const {data: user, isLoading, error} = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`)

  if (isLoading) return <p>Loading</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <>
      <Link to="/user">Back to Users</Link>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>Company : {user.company.name}</p>
    </>
  )
}

export default UserDetails