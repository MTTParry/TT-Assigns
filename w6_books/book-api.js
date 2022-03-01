const express = require('express') //imports Express framework
const bodyParser = require('body-parser'); //middleware
const cors = require('cors'); //privacy & permissions

const app = express(); //defining the app that will serve the endpoints (the REST)
const port = 3000; //localhost location

// Where we will keep books
let books = [
    {
        isbn: 9780060273224,
        title: "Sabriel",
        author: "Garth Nix",
        publisher: "HarperTeen",
        publishedDate: 1995,
        numOfPages: 491
    },
    {
        isbn: 9780312850098,
        title: "Eye of the World",
        author: "Robert Jordan",
        publisher: "Tor Books",
        publishedDate: 1990,
        numOfPages: 670
    },
    {
        isbn: 9780439536431,
        title: "Quadehar the Sorcerer",
        author: "Eric L'Homme",
        publisher: "Chicken House",
        publishedDate: 2003,
        numOfPages: 288
    },
    {
        isbn: 9780446513630,
        title: "Dawn",
        author: "Octavia E. Butler",
        publisher: "Grand Central Pub",
        publishedDate: 1987,
        numOfPages: 264
    },
    {
        isbn: 9780689317200,
        title: "A Wizard of Earthsea",
        author: "Ursula K. Le Guin",
        publisher: "Atheneum",
        publishedDate: 1991,
        numOfPages: 205
    }
];

//use default cors stuff
app.use(cors());

// Configuring body parser middleware
    //urlencoded: a way to encode arbitrary data using ascii chars (emojies, special chars, etc)
app.use(bodyParser.urlencoded({
    extended: false 
}));

//bodyParser using Node, wants the body back as JSON
app.use(bodyParser.json());

//Get Books    
app.get('/', (req, res) => {
    //this returns a json
    res.json(books);
});

    //this render the html page
app.get('/book', (req, res) => {
    res.sendFile(path.join(__dirname, '/book-list.html'));
});


//Add books
app.post('/book', (req, res) => { //GET and POST can share an endpoint
    //json; reading the body/form data
    const book = req.body;

    // Output the book to the console for debugging
    console.log(book);
    books.push(book);

    res.send('Book is added to the database');
});


//Delete books
app.delete('/book/:isbn', (req, res) => {
    // Reading isbn from the URL
    //params comes from the :isbn
    const isbn = req.params.isbn;

    // Remove item from the books array
    books = books.filter(i => {
        if (i.isbn !== isbn) { //if the isbn matches one from the list
            return true; //if it doesn't, nothing changes
        }
        return false; //this will drop it due to the match
    });

    res.send('Book is deleted');
});

app.listen(port, () => 
    console.log(`Book app listening on port ${port}!`)
);