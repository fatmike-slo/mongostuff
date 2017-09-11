let mongo = require("mongodb").MongoClient;
let url = "mongodb://127.0.0.1:27017/learnyoumongo";
let sizeArg = process.argv[2];

mongo.connect(url, (err, db) => {
    if (err) {
        console.log(err);
    }
    let collection = db.collection("prices");
    collection.aggregate([{
        $match: {size: sizeArg}
        },
    {
        $group: {
            _id: "count",
            count: {
                $avg: "$price"
            }
        }
    }
]).toArray((err, data) => {
        console.log(data[0].count.toFixed(2));
        db.close();
    });
});
