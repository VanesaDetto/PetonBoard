const PetuserRoutes = require("express").Router();
const { authorize } = require("../../middlewares/auth");
const upload = require("../../middlewares/file");

const {
  register,
  login,
  petuserByID,
  update,
  remove,
  getAllPetusers,
} = require("./petuser.controller");

PetuserRoutes.post("/login", login);
PetuserRoutes.post("/register", upload.single("imagen"), register);
PetuserRoutes.get("/getall", getAllPetusers);
PetuserRoutes.get("/:id", [authorize], petuserByID);
PetuserRoutes.patch("/:id", [authorize], update);
PetuserRoutes.delete("/:id", [authorize], remove);

module.exports = PetuserRoutes;
