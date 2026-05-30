const express= require('express');
const router=express.Router();

const MenuItem=require('../models/MenuItem')
// For menu 
router.post('/', async (req,res)=>{
  try
  {
  const data =req.body 
  const newMenu=new MenuItem(data);
  const response = await newMenu.save();
  console.log('Data Saved')
  res.status(200).json(response)

    } catch(err) {
    console.error('Database Error:', err); 
    res.status(500).json({ error: 'Internal server error' });
} 
  }); 

router.get('/',async (req,res)=>{
  try{
    const data = await MenuItem.find();
    console.log('Data Fetched')
    res.status(200).json(data)
  }catch(err){
    console.error('Database Error:', err); 
    res.status(500).json({ error: 'Internal server error' });
  }

})

// comment added for testing purpose
module.exports=router;