const express= require('express')
const app = express()
const db= require('./db');
app.use(express.json());

const personRoutes=require('../routes/personRoutes')
app.use('/person',personRoutes)

const menuItemRoutes=require('../routes/menuItemRoutes')
app.use('/menu',menuItemRoutes)

  
const bodyParser=require('body-parser');
  

app.use(bodyParser.json());//req.body

 
app.get('/', (req, res) => {
  res.send('Welcome to my Hotel ... How can i help you')
})
  
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})



  