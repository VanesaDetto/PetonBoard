import { useForm } from "react-hook-form";
import { API } from "../services/API";
import { Axios } from "axios";
import "./Petregister.css";

const Petregister = () => {
  const { register, handleSubmit } = useForm();

  const formSubmit = (data) => {
    const formData = new FormData();
    formData.append("petuser", data.petuser);
    formData.append("password", data.password);
    API.post("/petuser/register", formData).then((res) => {});
  };

  return (
    <section className="register">
      <h2>Please Register</h2>
      <form onSubmit={handleSubmit(formSubmit)}>
        <label htmlFor="petuser">Petusername</label>
        <input
          type="text"
          id="petuser"
          name="petuser"
          {...register("petuser ")}
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
