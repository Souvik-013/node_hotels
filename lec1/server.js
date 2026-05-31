const express= require('express')
const app = express()
const db= require('./db');
app.use(express.json());
require('dotenv').config();
 
const personRoutes=require('../routes/personRoutes')
app.use('/person',personRoutes)

const menuItemRoutes=require('../routes/menuItemRoutes')
app.use('/menu',menuItemRoutes)

  
const bodyParser=require('body-parser');
  

app.use(bodyParser.json());//req.body

const PORT= process.env.PORT || 3000;

 
app.get('/', (req, res) => {
  res.send('Welcome to my Hotel ... How can i help you')
})

  
app.listen(PORT, () => {
  console.log('Server is running on http://localhost:3000')
})



  