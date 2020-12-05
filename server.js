const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000;
require('./views/hbs/helpers');
 app.use(express.static(__dirname + '/public'));
 app.set('view engine', 'hbs');

//Expres HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.get('/',  (req, res) => {
    
    res.render('home',{
        nombre:'ruth Grace',
       
    });
  
});
app.get('/about',  (req, res) => {
    
    res.render('about',{
        nombre:'Ruth',
        
    });
  
});
app.listen(port,()=>{
    console.log(`Escuchando peticiones en el puerto ${port}`);
});