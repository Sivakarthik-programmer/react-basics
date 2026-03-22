
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch.jsx'

function User() {
    const {data: users, isLoading, error} = useFetch('https://jsonplaceholder.typicode.com/users')

    if (isLoading) return <p>Loading</p>
    if (error) return <p>Error: {error.message}</p>


  return (
    <>
        <h1>User</h1>
        {users.map(user=>(
            <div key={user.id}>
                <Link to={`/user/${user.id}`}>  
                    <h3>{user.name}</h3>
                </Link>
                <p>{user.email}</p>
            </div>
        ))}
    </>
  )
}

export default User