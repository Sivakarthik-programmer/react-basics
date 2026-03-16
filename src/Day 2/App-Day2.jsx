import { useState, useEffect } from "react"
import AddUserForm from "./Day 2/components/AddUserForm"
import UserCard from "./Day 2/components/UserCard"
import axios from "axios";


function App() {

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setIsLoading(false);
      });

  }, []);


  // Every 1 second, increment seconds by 1
// Use prev => pattern
// Clean up the timer
// Runs only once on mount
// Reset seconds to 0 when users array changes (separate useEffect)
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setSeconds(0);
  }, [users]);


  const handleRemove = (id)=>{
    setUsers(prev => prev.filter(user => user.id !== id));

  }

const handleAdd = (newUserData) => {
  const newUser = {
    id: Date.now(),
    ...newUserData
  }
  setUsers(prev => [...prev, newUser])
}

const handleEdit = (id, newName) => {
  setUsers(prev => prev.map(user => user.id === id ? {...user, name: newName} : user));
}

 return (
  <>
    <h1>User Directory</h1>
    <p>Last updated: {seconds} seconds ago</p>

    <AddUserForm onAdd = {handleAdd}/>

    {isLoading ? (
      <p>Loading...</p>
    ) : (
      users.map(user => (
        <UserCard
          key={user.id}
          user={user}
          onRemove = {handleRemove}
          onEdit = {handleEdit}
        />
      ))
    )}
  </>
)
}

export default App