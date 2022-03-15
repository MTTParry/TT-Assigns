import React from 'react';
import { useState } from 'react';

const marlin = { name: 'Marlin', email: 'marlin@gmail.com', id: '1' };
const nemo = { name: 'Nemo', email: 'nemo@gmail.com', id: '2' };
const dory = { name: 'Dory', email: 'dory@gmail.com', id: '3' };

const Users = () => {
    const [users, setUsers] = useState([marlin, nemo, dory]);
    
    //Add user stuff
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [id, setId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = { id, name, email };
        setUsers([...users, newUser]);
      };
      

    return (
        // This generates the list of users
        <div>
            <div>
                <ul id="users-list">
                    <h3>User List</h3>
                    {users.map((user) => (
                        <li key={user.id}>
                            {user.name} — {user.email}
                        </li>   
                    ))}
                </ul>
            </div>

            <div>
                <h3>Add User</h3>
                <form id="add-user" action="#" onSubmit={handleSubmit}>
                    <fieldset>
                        <label>Name</label>
                        <input 
                            type="text" 
                            id="add-user-name" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            />
                        <br/>
                    
                        <label>Email</label>
                        <input 
                            type="text" 
                            id="add-user-email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        <br/>
                    
                        <label>ID</label>
                        <input 
                            type="number" 
                            id="add-user-id" 
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            />
                    </fieldset>

                <input 
                    type="submit" 
                    value="Add"
                    />

                </form>
            </div>
        </div>
    )
};

export default Users;
