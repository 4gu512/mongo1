const mongoose = require("mongoose");

const jamEmbeddedSchema = new mongoose.Schema({
  seri: {
    required: true,
    type: String,
  },
  nama: {
    required: true,
    type: String,
  },
  warna: {
    required: true,
    type: String,
  },
  harga: {
    required: true,
    type: String,
  },
  aksesoris: [
    {
      kdTp: String,
      ukuran: String,
    },
  ],
});

module.exports = mongoose.model("Jam", jamEmbeddedSchema, "Jam");
