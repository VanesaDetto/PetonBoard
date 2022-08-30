import { useContext } from "react";
import { JwtContext } from "../contexts/jwtContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API } from "../services/API";
import "./Login.css";
import Swal from "sweetalert2";

const Login = () => {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  const { setJwt, setUser } = useContext(JwtContext);

  const formSubmit = (formData) => {
    API.post("/petuser/login", formData).then((res) => {
      console.log(res);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.petuserInDb));
      setJwt(res.data.token);
      setUser(res.data.petuserInDb);
      if (res.data.token) {
        navigate("/");
        Swal.fire("Wellcome to the Web!");
      }
    });
  };

  return (
    <section className="login">
      <h2>Please log in:</h2>

      <form onSubmit={handleSubmit(formSubmit)}>
        <div className="box">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            {...register("username")}
          />
        </div>
        <div className="box">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            {...register("password")}
          />
        </div>
        <button className="Boton" type="submit">
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
