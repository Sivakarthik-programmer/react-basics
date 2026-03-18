import { UserContext } from "../context/UserContext"
import { useContext } from "react"

function Profile() {
    const {user, setUser} = useContext(UserContext);
  return (
    <>
      <div>Profile</div>
      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
      <button onClick={() => setUser(prev => ({ ...prev, name: 'Karthik' }))}>
        Change Name
      </button>
    </>
  )
}

export default Profile