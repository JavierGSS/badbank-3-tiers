const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";

// connect to mongo
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
  console.log("Connected successfully to server");

  // database Name
  const dbName = "myProject";
  const db = client.db(dbName);

  // new user
  var name = "user" + Math.floor(Math.random() * 10000);
  var email = name + "@mit.edu";
  var number = "c" + Math.floor(Math.random() * 100);

  var customers = db
    .collection("customers")
    .find()
    .toArray(function (err, docs) {
      console.log("Collection:", docs);

      // clean up
      client.close();
    });

  // insert into customer table
  var collection = db.collection("customers");
  var doc = { name, email, number };
  collection.insertOne(doc, { w: 2 }, function (err, result) {
    console.log("Document insert");
  });
});
