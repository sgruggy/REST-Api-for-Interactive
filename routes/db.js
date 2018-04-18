const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artSchema = new Schema({
    id: Number,
    name: String,
    year: Number,
    artist: String,
    transcript: String,
    url: String
});

mongoose.model('ArtSchema', artSchema, 'Artworks');
mongoose.connect("mongodb://sgruggy:root@ds123259.mlab.com:23259/hacknyu", ()=>{
    console.log("Connected to db");
});