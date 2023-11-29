const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";

MongoClient.connect(url, function (err, client) {
  console.log("Connected successfully to server");

  // database Name
  const dbName = "myProject";
  var db = client.db(dbName);

  var name = "user" + Math.floor(Math.random() * 10000);
  var email = name + "@mit.edu";
  var number = "c" + Math.floor(Math.random() * 100);

  // insert into customer table
  var collection = db.collection("customers");
  var doc = { name, email, number };
  collection.insertOne(doc, { w: 1 }, function (err, result) {
    console.log("Document insert");
  });

  // read DB
  var query = {};
  var cursor = collection.find(query);

  cursor.forEach(
    function (doc) {
      console.log(doc);
    },
    function (err) {
      client.close();
    }
  );
});
