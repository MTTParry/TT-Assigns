import React, { useState } from "react";

const DeleteEvent = ({ handleDeleteEvent }) => {
    const [eventIdToDelete, setEventIdToDelete] = useState("");

    return (
        <div>
            <h3>Delete Event</h3>
            <form 
                id="delete-event" 
                action="#"
                onSubmit={(ev) => {
                    ev.preventDefault();
                    handleDeleteEvent(eventIdToDelete);
                    setEventIdToDelete("");
                  }}
                >

            <fieldset>
                <label>Event ID</label>
                <input 
                    type="number" 
                    min="1" 
                    id="delete-event-id" 
                    value={eventIdToDelete}
                    onChange={(e) => setEventIdToDelete(e.target.value)}
                />
            </fieldset>
            <input type="submit" />
            </form>
        </div>
    )
}

export default DeleteEvent;