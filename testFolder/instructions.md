# Instructions

### Starter Steps
1. Create folder for project
2. Run node npm in terminal (npm init -y)
3. Install mongoose dependency (npm install mongoose)
4. Create sub-folders for db, and models
5. Create connection.js file in db folder. 

### In Connection.js File:
1. Import mongoose 
```
const mongoose = require('mongoose')
```

2. Setup Database.  Option 1:
```
mongoose.connect('mongodb://localhost/authors', {useNewUrlParser: true});
```
3. Setup Database. Option 2:
```
let mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect('mongodb://127.0.0.1:27017/authors', mongooseConfig)
```
*for Setting Up Database with object (below) and local host address (127.0.0.1) and the Mongoose address (27017)*

4. Export Connection to be used in JS file
```
module.exports = mongoose
```

### Index File for Modeling (Schemas)
1) Create Model Folder
2) Create Model file (js file).  *Note model files are generally capitalized*


### In Model1.js file
1) Import mongoose library (note: require(**[path]**))
```
const mongoose = require('../db/connection.js')
```
2) Creating the Schema (aka class structure)
```
const authorSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
})
```
*Note: the values must be capitalized for the Schema to recognize the data type*
3) Creating a mongoose class (in this example with the name Author)
```
const Author = mongoose.model('Author', authorSchema)
```
4) Export new Schema Class to be used in other js file
```
module.exports = Author
```













