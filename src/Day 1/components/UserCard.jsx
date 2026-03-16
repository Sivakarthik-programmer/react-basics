import axios from "axios";
import { useEffect, useState } from "react";

function UserCard() {

const [user, setUser] = useState(null)
const [isLoading, setIsLoading] = useState(true)

useEffect(() => {

const fetchUserData = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');   
    const userData = response.data;
    setUser(userData);
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
    finally {
      setIsLoading(false)  
    }
}

  fetchUserData();
}, [])


  return (
    <div>
      <h2>
        Name: {user?.name}</h2>
      <p>Phone: {user?.phone}</p>
      <p>Email: {user?.email}</p>
    </div>
  )

}

export default UserCard