const express = require("express");
const routerJam = express.Router();

const controllerJam = require("../controller/jam");

routerJam.route("/Jam").get(controllerJam.getJamBySeri).post(controllerKue.insert);

routerKue.route("/Jam/:seri").put(controllerJam.update).get(controllerJam.getJamBySeri).delete(controllerJam.delete);

routerKue.route("/Jam/Nama/:seri").get(controllerJam.getJamBySeri).put(controllerJam.update);

module.exports = routerKue;
