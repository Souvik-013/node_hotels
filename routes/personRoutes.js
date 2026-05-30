const express= require('express');
const router=express.Router();
const Person=require('../models/Person')


//POST route to add a person
router.post('/', async (req,res)=>{
  try
  {
    
  const data =req.body // assuming request body contains the person data
  //create  new person document using the mongoose model
  const newPerson=new Person(data);

  //save the new person to the database
  const response = await newPerson.save();
  console.log('Data Saved')
  res.status(200).json(response)

    } catch(err) {
    console.error('Database Error:', err); 
    res.status(500).json({ error: 'Internal server error' });
}
  });
router.get('/',async (req,res)=>{
  try{
  const data = await Person.find();
  console.log('Data Fetched')
  res.status(200).json(data)
  }catch(err){
    console.error('Database Error:', err); // Change this line!
    res.status(500).json({ error: 'Internal server error' });
  }
})

router.get('/:workType',async (req,res)=>{
  try
  {
    const workType=req.params.workType;// extract the worktype from the url parameter
    if (workType=='chef' || workType=='manager'|| workType=='waiter')
    {
      const response= await Person.find({work : workType});
      console.log("response fetched");
      res.status(200).json(response)
    }else {
      res.status(404).json({error:'Invalid WorkType'})
    }

  }catch(err){
    console.error('Database Error:', err); 
    res.status(500).json({ error: 'Internal server error' });
  }

})

router.put('/:id', async (req, res) => {
  try {
    const personId = req.params.id;
    const updatedPersonData = req.body;

    const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
      new: true,          // return the updated document
      runValidators: true // run mongoose validation
    });

    if (!response) {
      // FIX: Chained status(404) properly before sending JSON
      return res.status(404).json({ error: 'Person data not found' });
    }

    console.log("data updated");
    // FIX: Chained status(200) properly to return the updated person object
    res.status(200).json(response);

  } catch (err) {
    console.error('Database Error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports=router;