import { useForm } from "react-hook-form";
import { API } from "../services/API";
import "./Petregister.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Petregister = () => {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();

  const formSubmit = (data) => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);
    formData.append("avatar", data.avatar[0]);
    formData.append("petname", data.petname);
    formData.append("specie", data.specie);
    formData.append("breed", data.breed);
    formData.append("weight", data.weight);
    formData.append("owner", data.owner);
    formData.append("origin", data.origin);
    formData.append("destiny", data.destiny);
    formData.append("date", data.date);
    formData.append("services", data.services);

    API.post("/petuser/register", formData).then((res) => {
      if (res) {
        navigate("/login");
        Swal.fire("Bienvenido, ya te puedes loguear con tus datos");
      }
    });
  };

  return (
    <section className="register">
      <h2>Please Register</h2>
      <form onSubmit={handleSubmit(formSubmit)}>
        <label htmlFor="username">Petsusername</label>
        <input
          type="text"
          id="username"
          name="username"
          {...register("username")}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          {...register("password")}
        />
        <label htmlFor="owner">Owner</label>
        <input type="text" name="owner" id="owner" {...register("owner")} />
        <label htmlFor="petname">PetName</label>

        <input
          type="text"
          name="petname"
          id="petname"
          {...register("petname")}
        />
        <label htmlFor="specie">Specie</label>
        <select {...register("specie")}>
        <option value="">Select...</option>
        <option value="cat">Cat</option>
        <option value="dog">Dog</option>
        <option value="rabbit">Rabbit</option>
        <option value="bird">Bird</option>
        </select>

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
        
        <label htmlFor="Services">Services</label>
        <select {...register("services")}>
        <option value="">Select...</option>
        <option value="hold">Hold</option>
        <option value="cabin">Cabin</option>
        </select>
         
        
        <label htmlFor="avatar">Avatar</label>
        <input type="file" id="avatar" name="avatar" {...register("avatar")} />

        <button type="submit">Register</button>
      </form>
    </section>
  );
};

export default Petregister;
