var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ExampleSchema = new Schema({
  title: {
    type: String
  },
  body: {
    type: String
  }
});

var Example = mongoose.model("Example", ExampleSchema);

module.exports = Example;
