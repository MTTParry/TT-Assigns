import React from 'react';
import { useState } from 'react';
import DeleteUser from './DeleteUser';



const Users = () => {
    const marlin = { name: 'Marlin', email: 'marlin@gmail.com', id: '1' };
    const nemo = { name: 'Nemo', email: 'nemo@gmail.com', id: '2' };
    const dory = { name: 'Dory', email: 'dory@gmail.com', id: '3' };

    //Users
    const [users, setUsers] = useState([marlin, nemo, dory]);

    //For adding users
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [id, setId] = useState('');


    //Listing Users
    const listUsers = users.map((user, index) => (
        <li key={index}>
            {user.name} — {user.email}
        </li>
    ));

    // Add User
    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = { id, name, email };

        setUsers([...users, newUser]);
        setName("");
        setEmail("");
        setId("");
    };

    // Delete User
    const handleDeleteUser = (deleteUser) => {
        const deleteUsers = users.filter((user) => user.id !== deleteUser);
        console.log(deleteUsers);
        setUsers(deleteUsers);
    };

    return (
        // This generates the list of users
        <div>
            <div>
                <ul id="users-list">
                    {/* This is where the list of users will be displayed */}
                    {listUsers}
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
                            min="1"
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
            {/* This adds in the Delete User functionality, through a... grandchild component(?) */}
            <DeleteUser handleDeleteUser={handleDeleteUser} />

        </div>
    )
};

export default Users;
