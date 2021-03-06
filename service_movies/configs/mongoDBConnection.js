const mongoose = require('mongoose')

module.exports = function() {
  mongoose.connect('mongodb://localhost/entertainme', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })

  var db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error, check mongod:'))
  db.once('open', function() {
    console.log("we're connected to mongodb!")
  })
}
