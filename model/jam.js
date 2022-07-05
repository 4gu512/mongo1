const mongoose = require("mongoose");

const jamSchema = new mongoose.Schema({
  seri: {
    require: true,
    type: String,
  },
  nama: String,
  warna: String,
  harga: String,
});

module.exports = mongoose.model("jam", jamSchema);
