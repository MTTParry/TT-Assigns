import React from 'react';
import { useState } from 'react';



const DeleteUser = ({users, deleteId}) => {


    return (
        // This generates the list of users
        <div>
              <h3>Delete User</h3>
              <form id="delete-user" action="#" onSubmit={deleteId}>
                <fieldset>
                  <label>User ID</label>
                  <input 
                    type="text" 
                    id="delete-user-id" 
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    />
                </fieldset>
                <input type="submit" />
              </form>
            </div>
    )
};

export default <DeleteUser></DeleteUser>;
