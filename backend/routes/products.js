const express = require("express");
const req = require("express/lib/request")
const router = express.Router();
const db = require('../db.js')


router.get('/', async function (req, res) {
  try {
    const cursor = await db.findAll()
    const data = await cursor.toArray()
    res.json(data)
  } catch (err) {
    console.log(err)
  }

})

router.get('/:id/', async function (req, res) {
  try {
    const cursor = await db.findItem(req.params.id)
    res.json(cursor)
  } catch (err) {
    console.log(err)
  }
})


router.post("/", async function (req, res) {
  try {
    const data = await db.saveUser(req.body)
    // res.send("data saved");
    res.json(data)
  } catch (err) {
    console.log(err)
  }
});

router.delete("/:id", async function (req, res) {
  try {
    const id = req.params.id
    const data = await db.deleteTask(id)
    // res.send("data saved");
    res.json(data)
  } catch (err) {
    console.log(err)
  }
});



module.exports.router = router;