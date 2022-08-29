const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { PET } = require("../../helpers/constants/pet");
const { SERVICES } = require ("../../helpers/constants/services")

const Schema = mongoose.Schema;

const schema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: false },
    avatar: { type: String, required: false },
    petname: { type: String, required: false },
    specie: { type: String, enum: PET, required: false },
    breed: { type: String, required: false },
    weight: { type: Number, required: false },
    owner: { type: String, required: false },
    origin: { type: String, required: false },
    destiny: { type: String, required: false },
    date: { type: String, required: false },
    services: { type: String, enum: SERVICES, required: false  },
    image: { type: String, required: false },
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
