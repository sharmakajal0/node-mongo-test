const MongoClient = require("mongodb").MongoClient;

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "myapp";

// Create a new MongoClient
const client = new MongoClient(url);
let db;
client.connect(err => {
  db = client.db(dbName);  
});

const getCollection = collectionName => {
  return db.collection(collectionName);
};

module.exports = {
    getCollection
};
