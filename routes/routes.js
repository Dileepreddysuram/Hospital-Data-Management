const express = require('express');
const Model = require('./models/model');
const router = express.Router();
const fs = require('fs');




//Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        doctor: req.body.doctor,
        date: req.body.date,
        time: req.body.time
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.post('/getpatientdetails', async (req,res) => {
    
    try {
        const finddate = await req.body.date;
        console.log(finddate);
        const objs = await Model.find({date:{ $regex:'.*'+finddate+'.*'} });
        res.json(objs);
    } catch (error) {
        res.json({message: error});        
    }
})


router.post('/signin', function(req, res) {
    const email = req.body.email;
    const password = req.body.password;
  
    // read data from the text file
    const data = fs.readFileSync('users.txt', 'utf8').trim().split('\n');
  
    // check if the email and password match any of the lines in the text file
    const match = data.find(line => line === `${email}:${password}`);
  
    if (match) {
      // authentication successful
      res.sendFile('C:/Users/SDR/Desktop/Hospital Data Management/getdata.html');

    } else {
      // authentication failed
      res.status(401).send('Invalid email or password');
    }
  });



//Get all Method
router.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;