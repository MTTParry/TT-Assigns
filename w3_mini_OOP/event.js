class Event {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.availableTickets = [];
    }
    
    addAvailableTickets(ticketName, price) {
        //this.ticketName = ticketName;
        //this.price = price;
        this.availableTickets.push(ticketName, price)
    }
    /*
    allTickets() {
      let allTicketSummary = "All tickets: ";
      for (let i = 0; i <this.availableTickets.length; i++) {
        allTicketSummary += '${i+1}. ${this.availableTickets[i][0]} ($${this.availableTickets[i][1]})';
        console.log(allTicketSummary);
      }
      return allTicketSummary;
    }
    */
}


class TicketType {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// The below statement creates an object.
const eventObj1 = new Event(
    'KLOS Golden Gala',
    'An evening with hollywood vampires'
);

//console.log(eventObj1);

//a few more objects
const eventObj2 = new Event('Skillet & Sevendust', 'Victorious war tour');
const eventObj3 = new Event('Jenny Lewis', 'On the line tour 2019');

//console.log(eventObj2);
//console.log(eventObj3);

//empty event array
const eventArray = new Array();

// pushing single object to an array
//eventArray.push(eventObj1); //commented out so eventObj1 only shows up 1x
// pushing multiple objects to an array at once
eventArray.push(eventObj1, eventObj2, eventObj3);

// in order to check whether the elements are pushed, use console.log
//console.log(eventArray);

document.addEventListener('DOMContentLoaded', () => {
  // Handler when the DOM is fully loaded
  let html = '';
  eventArray.forEach((item) => { //iterates through the array
    html += `<li>${item.name} - ${item.description}`;
  });
  document.querySelector('#event').innerHTML = html; //returns the html from the JS to the targetted html 
});


eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);
//console.log(eventArray);

eventObj2.addAvailableTickets("General Admission", 25);
eventObj2.addAvailableTickets("Floor Seating", 80);
eventObj3.addAvailableTickets("Orchestra", 300);
eventObj3.addAvailableTickets("Mezzanine", 200);
eventObj3.addAvailableTickets("Balcony", 100);
console.log(eventArray)