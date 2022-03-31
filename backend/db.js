const { ObjectId } = require("mongodb")
const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient

require('dotenv').config()
const uri = process.env.authURI
const client = new MongoClient(uri)

module.exports = {

  dbConnect: async function dbConnect() {
    try {
      await client.connect()
      console.log("db connected")
    } catch (err) {
      console.log(err)
    }
  },

  saveItem: async function saveUser(item) {
    try {
      const data = await client.db("cs5610").collection("products").insertOne(item);
      return data
    } catch (err) {
      console.log(err)
    }
  },

  findAll: async function findAll() {
    try {

      const data = await client.db("cs5610").collection("products").find()
      return data
    } catch (err) {
      console.log(err)
    }
  },

  findItem: async function findItem(id) {
    try {
      const data = await client.db("cs5610").collection("products").findOne({ _id: ObjectId(id) });
      console.log(data)
      return data
    } catch (err) {
      console.log(err)
    }
  },

  deleteItem: async function deleteItem(id) {
    try {
      const data = await client.db("cs5610").collection("products").deleteOne({ _id: ObjectId(id) })
      return data
    } catch (err) {
      console.log(err)
    }
  },
}
