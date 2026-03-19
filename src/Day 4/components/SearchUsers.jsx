// SearchUsers.jsx
// 1. Hardcoded users array (outside component):

import { useRef, useState, useMemo, useEffect, useCallback } from 'react'


const USERS = [
  { id: 1, name: 'Sivakarthik', role: 'Frontend Developer' },
  { id: 2, name: 'Rahul', role: 'Backend Developer' },
  { id: 3, name: 'Priya', role: 'UI Designer' },
  { id: 4, name: 'Arjun', role: 'Full Stack Developer' },
  { id: 5, name: 'Meena', role: 'React Developer' },
  { id: 6, name: 'Karthik', role: 'Node Developer' },
  { id: 7, name: 'Divya', role: 'DevOps Engineer' },
  { id: 8, name: 'Vikram', role: 'Mobile Developer' },
]

// 2. useState for search term
// 3. useRef to auto focus the search input on load
// 4. useMemo to filter users based on search term
//    filter by name OR role
// 5. Display:
//    - Search input (auto focused)
//    - "{count} users found"
//    - List of filtered users showing name and role


function SearchUsers() {
    const [searchTerm, setSearchTerm] = useState('');
    const inputRef = useRef();
    useEffect(() => {
    inputRef.current.focus()
    }, [])

    const filterUsers = useCallback((term) => {
    return USERS.filter(user =>
        user.name.toLowerCase().includes(term.toLowerCase()) ||
        user.role.toLowerCase().includes(term.toLowerCase())
    )
    }, [])


    const filteredUsers = useMemo(() => 
        filterUsers(searchTerm), [searchTerm, filterUsers]
    )
    const handleReset = useCallback(() => {
        setSearchTerm('')
        inputRef.current.focus()
    }, [])
    return (
        <div>

            <input
            ref={inputRef}
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <p>{filteredUsers.length} users found</p>
            <ul>
            {filteredUsers.map(user => (
                <li key={user.id}>
                <strong>{user.name}</strong> - {user.role}
                </li>
            ))}
            </ul>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}
             
    

export default SearchUsers
