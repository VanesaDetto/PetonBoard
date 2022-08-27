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
        <label htmlFor="username">Petusername</label>
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
        <button type="submit">Register</button>
      </form>
    </section>
  );
};

export default Petregister;
