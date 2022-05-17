const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema(
  {
    title: { type: String, requred: true, unique: true },
    tyoe: { type: String },
    genre: { type: String },
    content: { type: Array },
  },
  { timestamp: true }
);

module.export = mongoose.model('List', ListSchema);
