const express = require("express");
const path = require("path");

const app = express();
const port = 8000;

// Express Specific Stuff
app.use('/static', express.static('static')); // For serving static files
app.use(express.urlencoded());

// PUG Specific Stuff
app.set('view engine', 'pug'); // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')); // Set the views directory
// my name is pratik kumar

// ENDPOINTS
app.get('/', (req,res)=>{
    const params = {}
    res.status(200).render('home.pug',params);
})

app.get('/contact', (req,res)=>{
    const params = {}
    res.status(200).render('contact.pug',params);
})

app.listen(port, ()=>{
    console.log(`The application started sucessfully on port ${port}`);
});