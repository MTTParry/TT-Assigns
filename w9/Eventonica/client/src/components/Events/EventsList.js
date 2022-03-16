import React from "react";

const ListEvents = ({events}) => {
    console.log(events);
    // Listing Events
    const listEvents = events.map((event, index) =>
        <li key={index}>
            {event.name} : {event.date}
            <br/>
            EVENT TYPE: {event.category}
            <br/>
            {event.description}
            <br/>
        </li>
    );

    return (
        <div id="list-events">
            <h3>All Events</h3>
                <ul id="events-list">
                    {listEvents}
                </ul>
        </div>
    );
}

export default ListEvents;