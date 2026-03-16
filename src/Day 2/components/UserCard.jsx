

// Receives one prop: user (object)
// Display:
// - user.name in an h3
// - user.email in a p tag
// - user.phone in a p tag
// - A "Remove" button (just the UI, no logic yet)

import { useState } from "react";



// 1. Add local state: isEditing (boolean, default false)
// 2. Add local state: editName (string, default user.name)
// 3. Show Edit/Remove buttons when isEditing is false
// 4. Show input + Save + Cancel buttons when isEditing is true
// 5. Save button calls onEdit(user.id, editName) — prop from App
// 6. Cancel button sets isEditing back to false


function UserCard({ user, onRemove, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(user.name);

  return (
    <>
        <h3>Name: {user?.name}</h3>
        <p>Phone: {user?.phone}</p>
        <p>Email: {user?.email}</p>
        <button onClick={() => setIsEditing(true)}>Edit</button>
        <button onClick={() =>onRemove(user.id)}>Remove</button>
        
        {isEditing && (
            <>
                <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} />    
                <button onClick={() => {
                    onEdit(user.id, editName);
                    setIsEditing(false);
                }}>Save</button>
                <button onClick={() => setIsEditing(false)}>Cancel</button>
            </>
        )}
    </>
  )
}

export default UserCard