let mongo = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/" + process.argv[2];

mongo.connect(url, (err,db)=> {
    if(err) {
        console.log(err);
    }
    let collection = db.collection(process.argv[3]);
    collection.remove({
        _id:process.argv[4]
    },(err)=> {
        if(err) {
            console.log(err);
        }
        db.close();
    });
})

