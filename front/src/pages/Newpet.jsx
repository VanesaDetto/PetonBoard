import { useForm } from "react-hook-form";
import { API } from "../services/API";
import "./Newpet.css";
import {useState} from "react"
import { useNavigate } from "react-router-dom";

const Newpet = () => {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();

  const formSubmit = (data) => {
    const formData = new FormData();
    
    
    formData.append("image", data.image[0]);
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
      if (res) {
        navigate("/profile");
        Swal.fire("Bienvenido, ya te puedes loguear con tus datos");
      }
    });
  };

  return (
    <section className="newpet">
      <h2>Create pet</h2>
      <form onSubmit={handleSubmit(formSubmit)}>
        <label htmlFor="petname">Petname</label>
        <input
          type="text"
          id="petname"
          name="petname"
          {...register("petname")}
        />
        <label htmlFor="owner">Owner</label>
        <input type="text" name="owner" id="owner" {...register("owner")} />
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
          type="date"
          min="1980-01-01"
          max="2030-12-31"
          id=""
          {...register("date")}
        />
        <label htmlFor="Servicies">Servicies</label>
        <input
          type="checkbox"
          id="services"
          name="services"
          {...register("services")}
        />
        <label htmlFor="image">Imagen</label>
        <input type="file" id="image" name="image" {...register("avatar")} />

        <button type="submit">Create pet</button>
      </form>
    </section>
  );
};

export default Newpet;
