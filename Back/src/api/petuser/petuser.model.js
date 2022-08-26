const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { PET } = require("../../helpers/constants/pet");

const Schema = mongoose.Schema;

const schema = new Schema(
  {
    petusername: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    petname: { type: String, required: true },
    imagen: { type: String, required: false },
    specie: { type: String, enum: PET, required: true },
    breed: { type: String, required: true },
    weight: { type: Number, required: true },
    owner: { type: String, required: false },
    origin: { type: String, required: true },
    destiny: { type: String, required: true },
    date: { type: String, required: true },
    services:{type: Boolean, required: false}
  },

  {
    timestamps: true,
  }
);

schema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

module.exports = mongoose.model("petuser", schema);
