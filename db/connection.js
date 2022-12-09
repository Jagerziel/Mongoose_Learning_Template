const mongoose = require('mongoose')

//Option 1 for Setting Up Database
mongoose.connect('mongodb://localhost/authors', {useNewUrlParser: true});

//Option 2 for Setting Up Database with object (below) and local host address (127.0.0.1) and the Mongoose address (27017)
let mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect('mongodb://127.0.0.1:27017/authors', mongooseConfig)

module.exports = mongoose
