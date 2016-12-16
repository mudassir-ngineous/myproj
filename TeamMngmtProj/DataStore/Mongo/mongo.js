function insert(doc) {
    var MongoClient = require(mongodb).MongoClient;
    var url = "mongodb://localhost:27017/luqman";
    MongoClient.connect(url, function (err, db) {
        if (err) {
            console.log("not connected to server");
        } else {
            console.log("Connected correctly to server");
        }
        var collection = db.collection("docs");
        collection.insert(doc, function (err, result) {
            if (err) {
                console.log("doc not inserted");
            } else {
                console.log("inserted 3 doc");
            }
            console.dir(docs);
            db.close();
        });
    });
};
exports.insert = insert;