var mongoose = require('mongoose');
var Schema = mongoose.Schema

var BookSchema = new Schema(
    {
        title:{type:String, required:true},
        author:{type:String,ref:'Author', required:true},
        isbn:{type:String,require:true},
        genre:[{type:Schema.OjectId,ref:'Genre'}],
    }
)
module.exports = mongoose.model('Book', BookSchema);
