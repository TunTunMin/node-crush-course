const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes.js');
// express app
const app = express();
// connect to mongodb
const dbURI = "mongodb+srv://tuntunmin:tuntun1234@tuntunmin.k7j5vsg.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(dbURI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  }).then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000);
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });
// register view engine
const ejs = require('ejs');
app.set('view engine', 'ejs');
// listen for request

app.use(morgan('tiny'));
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
// blogs
 
app.get('/', (req, res) =>{ 
    res.redirect('/blogs');
});
app.get('/about', (req, res) => {
    // res.sendFile('./views/about.html', {root: __dirname});
    res.render('about',{title: 'About'});
})
// redirect
app.get('/about-us', (req, res) => {
    res.redirect('/about',{title: 'About'});
})
// blog route
app.use('/blogs', blogRoutes);

// 404 page
app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', { root: __dirname});
    res.status(404).render('404',{title: '404'});
})