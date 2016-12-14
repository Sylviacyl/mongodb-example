const { MongoClient, ObjectID } = require('mongodb');

const uri = 'mongodb://localhost:27017/test';

MongoClient.connect(uri, function(err, db) {
  var Cars = db.collection('cars');
  Cars.find()
  .toArray()
  .then(cars => {
    console.log(cars);
    cars.forEach( car => console.log(car.brand));
  })
    .catch(error => {
      console.error(error);
    });

const carID = ObjectID('585098a535e4b70e1adee62a');
Cars.findOneAndUpdate(
  { _id: carID},
  { $set: { brand: 'Subaru'} }
)

.then(updateLog => {
  console.log(updateLog)
})
  });
