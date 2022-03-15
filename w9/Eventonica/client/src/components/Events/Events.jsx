import { useState } from "react";

const Events = () => {
    const event1 = {
        id: "1",
        name: "Birthday",
        date: "2021-09-01",
        description: "A birthday party for my best friend",
        category: "Celebration",
    };
    
    const event2 = {
        id: "2",
        name: "Graduation",
        date: "2021-08-01",
        description: "The class of 2021 graduates from East High",
        category: "Education",
    };
    
    const event3 = {
        id: "3",
        name: "JS Study Session",
        date: "2021-10-01",
        description: "A chance to practice Javascript interview questions",
        category: "Education",
    };

    // Events
    const [events, setEvents] = useState([event1, event2, event3]);

    // For Adding Events
    const [eventName, setEventName] = useState('');
    const [eventId, setEventId] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [eventCategory, setEventCategory] = useState('');

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
    )

    // New Events
    const handleAddEvents = (e) => {
        e.preventDefault();
        const newEvent = { eventId, eventName, eventDate, eventDescription, eventCategory };

        setEvents([...events, newEvent]);
        setEventName('');
        setEventId('');
        setEventDate('');
        setEventDescription('');
        setEventCategory('');
    };
    


    return (
        <section className="event-management">
            <h2>Event Management</h2>
            <div>
              <h3>All Events</h3>
              <ul id="events-list">
                {listEvents}
              </ul>

              <h3>Add Event</h3>
              <form 
                id="add-event" 
                action="#"
                onSubmit={handleAddEvents}>
                <fieldset>
                    <label>Name</label>
                    <input
                    type="text"
                    id="add-event-name"
                    placeholder="Virtual corgi meetup"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    />
                    <br/>

                    <label>Date</label>
                    <input
                        type="date"
                        id="add-event-date"
                        placeholder="2021-12-31"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                    />
                    <br/>

                    <label>Description</label>
                    <input
                        type="text"
                        id="add-event-description"
                        placeholder=""
                        value={eventDescription}
                        onChange={(e) => setEventDescription(e.target.value)}
                    />
                    <br/>

                    <label>Category</label>
                    <input
                        type="text"
                        id="add-event-category"
                        value={eventCategory}
                        onChange={(e) => setEventCategory(e.target.value)}
                    />
                    <br/>

                    <label>ID</label>
                    <input
                        type="number"
                        min="1"
                        id="add-event-id"
                        value={eventId}
                        onChange={(e) => setEventId(e.target.value)}
                    />

                </fieldset>
                {/* Add more form fields here */}
                <input type="submit" />
              </form>
            </div>
          </section>
    )
};

export default Events;