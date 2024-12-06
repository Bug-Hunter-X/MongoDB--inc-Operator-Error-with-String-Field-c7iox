```javascript
// Correct use of $inc operator in MongoDB update
db.collection('myCollection').updateOne({ _id: 1 }, { $inc: { field: 1 } });

//Alternative to handle cases where the field may not exist:
//db.collection('myCollection').updateOne({ _id: 1 }, { $inc: { field: 1 } }, {upsert:true});
```