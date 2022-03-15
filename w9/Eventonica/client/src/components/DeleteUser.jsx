import React, { useState } from 'react';

const DeleteUser = ({ handleDeleteUser }) => {
  const [userIdToDelete, setUserIdToDelete] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   deleteUser(id);
  // };

  return (
    <div>
      <h3>Delete User</h3>
      <form 
        id="delete-user" 
        action="#" 
        onSubmit={(ev) => {
          ev.preventDefault();
          handleDeleteUser(userIdToDelete);
          setUserIdToDelete("");
        }}
      >

        <fieldset>
          <label>User ID</label>
          <input 
            type="text" 
            id="delete-user-id" 
            value={userIdToDelete}
            onChange={(e) => setUserIdToDelete(e.target.value)}
            />
        </fieldset>
        <input type="submit" />
      </form>
    </div>
  )
};

export default DeleteUser;
