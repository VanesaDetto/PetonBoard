import { useState } from "react";
import { API } from "../services/API";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Newpet.css";

const NewPet = () => {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();

  const formSubmit = (data) => {
    const formData = new FormData();
    formData.append("petname", data.petname);
    formData.append("specie", data.especie);
    formData.append("breed", data.breed);
    formData.append("weight", data.weight);
    formData.append("owner", data.owner);
    formData.append("origin", data.origin);
    formData.append("destiny", data.destiny);
    formData.append("date", data.date);
    formData.append("services", data.services);

    API.post("/petuser/create", formData).then((res) => {
      navigate("/Pets");
    });
  };

  return (
    <section className="newpet">
      <h2>Create Pet:</h2>
      <form onSubmit={handleSubmit(formSubmit)}>
        <label htmlFor="petname">PetName</label>
        <input
          type="text"
          name="petname"
          id="petname"
          {...register("petname")}
        />
        <label htmlFor="specie">Specie</label>
        <input
          type="text"
          name="specie"
          id="especie"
          {...register("especie")}
        />
        <label htmlFor="breed">Breed</label>
        <input type="text" name="breed" id="breed" {...register("breed")} />
        <label htmlFor="weight">Weight</label>
        <input
          type="number"
          name="weight"
          id="weight"
          {...register("weight")}
        />
        <label htmlFor="owner">Owner</label>
        <input type="text" name="owner" id="owner" {...register("owner")} />
        <label htmlFor="origin">origin</label>
        <input type="text" name="origin" id="origin" {...register("origin")} />
        <label htmlFor="destiny">destiny</label>
        <input
          type="text"
          name="destiny"
          id="destiny"
          {...register("destiny")}
        />
        <label htmlFor="date">date</label>
        <input
          type="number"
          name="date"
          id="date"
          min={0}
          max={9}
          {...register("date")}
        />
        <label htmlFor="services">Services</label>
        <input
          type="checkbox"
          name="services"
          id="services"
          {...register("services")}
        />
        <button type="submit">Create</button>
      </form>
    </section>
  );
};

export default NewPet;
