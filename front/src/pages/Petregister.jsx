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
        <div className="box">
          <label htmlFor="username">Username</label>
          <input
            placeholder="E.g: John"
            required
            type="text"
            id="username"
            name="username"
            {...register("username")}
          />
        </div>

        <div className="box">
          <label htmlFor="password">Password</label>
          <input
            placeholder="E.g: John.123!"
            required
            type="password"
            id="password"
            name="password"
            {...register("password")}
          />
        </div>

        <div className="box">
          <label htmlFor="owner">Owner</label>
          <input
            placeholder="Name"
            requiredtype="text"
            name="owner"
            id="owner"
            {...register("owner")}
          />
        </div>

        <div className="box">
          <label htmlFor="petname">Name of Pet</label>

          <input
            placeholder="E.g: Boby"
            required
            type="text"
            name="petname"
            id="petname"
            {...register("petname")}
          />
        </div>

        <div className="box">
          <label htmlFor="specie">Specie</label>
          <select {...register("specie")}>
            <option value="">Select...</option>
            <option value="cat">Cat</option>
            <option value="dog">Dog</option>
            <option value="rabbit">Rabbit</option>
            <option value="bird">Bird</option>
          </select>
        </div>

        <div className="box">
          <label htmlFor="breed">Breed</label>
          <input
            placeholder="E.g: Boxer"
            requiredtype="text"
            name="breed"
            id="breed"
            {...register("breed")}
          />
        </div>

        <div className="box">
          <label htmlFor="weight">Weight</label>

          <input
            placeholder="E.g: 15"
            required
            type="number"
            name="weight"
            id="weight"
            {...register("weight")}
          />
        </div>

        <div className="box">
          <label htmlFor="origin">Origin</label>
          <input
            placeholder="E.g: Polonia"
            required
            type="text"
            name="origin"
            id="origin"
            {...register("origin")}
          />
        </div>

        <div className="box">
          <label htmlFor="destiny">Destiny</label>
          <input
            placeholder="E.g: Alemania"
            required
            type="text"
            name="destiny"
            id="destiny"
            {...register("destiny")}
          />
        </div>

        <div className="box">
          <label htmlFor="date">Date of your trip</label>
          <input
            type="date"
            min="1980-01-01"
            max="2030-12-31"
            id=""
            {...register("date")}
          />
        </div>

        <div className="box">
          <label htmlFor="Services">Travel options</label>
          <select {...register("services")}>
            <option value="">Select...</option>
            <option value="hold">Hold</option>
            <option value="cabin">Cabin</option>
          </select>
        </div>

        <div className="box">
          <label htmlFor="avatar">Avatar</label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            {...register("avatar")}
          />
        </div>
        <button className="Boton" type="submit">
          Register
        </button>
      </form>
    </section>
  );
};

export default Petregister;
