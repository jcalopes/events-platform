var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose
  .connect(
    "mongodb+srv://paw:paw@webeventos.vbiw2.mongodb.net/webEvents?retryWrites=true&w=majority", 
    { useNewUrlParser: true, 
      useUnifiedTopology: true } 
  )
  .then(() => console.log("Connected to DB!"))
  .catch(() => console.log(" Error connecting to DB!"));

module.exports = mongoose;
