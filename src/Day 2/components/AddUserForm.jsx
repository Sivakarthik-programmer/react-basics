import { useState } from 'react'



// AddUserForm.jsx
// Has its own local state for the form — one object state:
// { name: '', email: '', phone: '' }

// Receives one prop: onAdd (function from App.jsx)

// Displays:
// - 3 inputs: name, email, phone
// - A "Add User" button

// When button clicked:
// - Call onAdd with the form data
//  Clear the form back to empty strings


function AddUserForm({onAdd}) {
    const[formData, setFormData] = useState({ name: '', email: '', phone: '' });
    return (
        <>        
            <div>AddUserForm</div>
            <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData(prev=>({...prev, name: e.target.value}))} />
            <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData(prev=>({...prev, email: e.target.value}))} />
            <input type="tel" placeholder="Phone" value={formData.phone} onChange={(e) => setFormData(prev=>({...prev, phone: e.target.value}))} />
            <button onClick={() => {
                onAdd(formData);
                setFormData({ name: '', email: '', phone: '' });
            }}>Add User</button>
        </>
    )
}

export default AddUserForm