const jam = require("../model/jamEmbedded");

module.exports = {
  getKue: async (req, res) => {
    try {
      const result = await jam.find();
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  insert: async (req, res) => {
    const data = new jam({
      seri: req.body.kode,
      nama: req.body.nama,
      warna: req.body.warna,
      harga: req.body.harga,
    });
    try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave);
    } catch (error) {
      res.status(400).json({ massage: error.massage });
    }
  },

  insertAksesoris: async (req, res) => {
    const seri = req.params.seri;
    console.log(seri);
    try {
      await jam.updateOne(
        { seri: seri },
        {
          $push: {
            //mamasukan nilai kedalam array
            aksesoris: {
              kdTp: String,
              ukuran: String,
            },
          },
        }
      );
      res.send("aksesoris telah disimpan");
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  },
  getAksesorisBySeri: async (req, res) => {
    const seri = req.params.seri;
    try {
      const result = await jam.findOne({ seri: seri }, { _id: 0, aksesoris: 1 });
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getJamBySeri: async (req, res) => {
    const seri = req.params.seri;
    try {
      const result = await jam.find().where("seri").equals(seri);
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  update: async (req, res) => {
    const filter = { seri: req.params.seri };
    const updateData = {
      nama: req.body.nama,
      warna: req.body.warna,
      harga: req.body.harga,
    };
    try {
      let result = await jam.updateOne(filter, updateData);
      res.send("Data telah terupdate");
    } catch (error) {
      res.status(409).json({ massage: error.message });
    }
  },

  delete: async (req, res) => {
    const filter = { seri: req.params.seri };
    try {
      await jam.deleteOne(filter);
      res.send("data telah terhapus");
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  },
};
