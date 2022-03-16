import calendar from "./calendar.png";
import "./App.css";
import Users from "./components/Users/Users";
import Footer from "./components/Footer";
import Events from "./components/Events/EventIndex";

function App() {

  return (
    <div className="App">
      <header>
        <img src={calendar} alt="Calendar Star Logo" />
        <h1>Eventonica</h1>
      </header>

      <main>
        <div className="user-and-events">
          <section className="user-management">
            <h2>User Management</h2>
            <Users />
          </section>


          <section className="event-management">
            <Events />

            <aside className="search-toolbar">
              <div>
                <h3>Find Events</h3>
                <form id="search" action="#">
                  <fieldset>
                    <label htmlFor="date-search">Date</label>
                    <input type="text" id="date-search" placeholder="YYYY-MM-DD" />
                  </fieldset>
                  <fieldset>
                    <label htmlFor="category-search">Category</label>
                    <input type="text" id="category-search" />
                  </fieldset>

                  <input type="submit" value="Search" />
                </form>
              </div>
            </aside>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;