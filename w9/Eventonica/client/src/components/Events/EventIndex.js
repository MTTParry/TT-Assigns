import React, { useState, useReducer} from "react";
import EventsList from "./EventsList";

// Empty Event
const initialFormState = {
    id: "",
    name: "",
    date: "",
    description: "",
    category: "",
};

 //potentially export
const reducer = (state, action) => {
  console.log(`The action is ${JSON.stringify(action)} and the type ${action.type}`)
  switch (action.type) {
    // case "HANDLE INPUT TEXT":
    //   return {
    //     ...state,
    //     [action.field]: action.payload,
    //   };
    case "editID":
      console.log(`Dispatched editID with ${action.payload}`);
      return { ...state, id: action.payload};
    case "editName":
      console.log(`Dispatched editName with ${action.payload}`);
      return { ...state, name: action.payload};
    case "editDescription":
      console.log(`Dispatched editCategory with ${action.payload}`);
      return { ...state, description: action.payload};
    case "editDate":
      console.log(`Dispatched editDate with ${action.payload}`);
      return { ...state, date: action.payload};
    case "editCategory":
      console.log(`Dispatched editCategory with ${action.payload}`);
      return { ...state, category: action.payload};
    case "resetForm":
      return initialFormState;
    default:
      return state;
  }
};


const Events = () => {  
  //Mock Events  
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

    //useReduce
    const [state, dispatch] = useReducer(reducer, initialFormState);

    // New Events
    const handleAddEvents = (e) => {
        e.preventDefault();
        console.log(state);
        setEvents([...events, state]);
        dispatch ({
          type: "resetForm"
        });
    };


    return (
        <section className="event-management">
            <h2>Event Management</h2>
            <div>

              <EventsList 
                events={events}
              />

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
                      value={state.name}
                      onChange={(e) => 
                        dispatch({ 
                          type: "editName", 
                          payload: e.target.value})
                        }
                      />
                      <br/>

                      <label>Date</label>
                      <input
                          type="date"
                          id="add-event-date"
                          placeholder="2021-12-31"
                          value={state.date}
                          onChange={(e) => 
                            dispatch({ 
                              type: "editDate", 
                              payload: e.target.value})
                            }
                      />
                      <br/>

                      <label>Description</label>
                      <input
                          type="text"
                          id="add-event-description"
                          placeholder="Describe the event"
                          value={state.description}
                          onChange={(e) => 
                            dispatch({ 
                              type: "editDescription", 
                              payload: e.target.value})
                            }
                      />
                      <br/>

                      <label>Category</label>
                      <input
                          type="text"
                          id="add-event-category"
                          placeholder="E.g., 'social'"
                          value={state.category}
                         onChange={(e) => 
                          dispatch({ 
                            type: "editCategory", 
                            payload: e.target.value})
                          }
                      />
                      <br/>

                      <label>ID</label>
                      <input
                          type="number"
                          min="1"
                          id="add-event-id"
                          value={state.id}
                          onChange={(e) => 
                            dispatch({ 
                              type: "editID", 
                              payload: e.target.value})
                            }
                      />

                  </fieldset>
                  {/* Add more form fields here */}
                  <input type="submit" />
                </form>
            </div>

            <div>
            <h4>Current State:</h4>
              {/* Show state for visual debugging */}
              {JSON.stringify(state, null, 2)}
            </div>
          </section>
    )
};

export default Events;