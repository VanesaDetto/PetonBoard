import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../contexts/jwtContext";
import { API } from "../services/API";
import Swal from "sweetalert2";
import "./Profile.css";

const Profile = () => {
  const { user, logout } = useContext(JwtContext);
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();

  const deletePet = () => {
    Swal.fire({
      title: "¿Estas seguro de borrar a tu mascota?",
      text: "No la vas a poder recuperar",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borrala!",
    }).then((result) => {
      if (result.isConfirmed) {
          API.delete(`/petuser/${user._id}`).then((res) => {
            navigate("/");
          });
        
        
      }
    });
  };


  const defaultValues = {
    username: user.username,
    petname: user.petname,
    specie: user.specie,
    breed: user.breed,
    weight: user.weight,
    owner: user.owner,
    origin: user.origin,
    destiny: user.destiny,
    date: user.date,
    services: user.services
  };

  const formSubmit = (data) => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("avatar", data.avatar[0]);
    formData.append("petname", data.petname);
    formData.append("specie", data.especie);
    formData.append("breed", data.breed);
    formData.append("weight", data.weight);
    formData.append("owner", data.owner);
    formData.append("origin", data.origin);
    formData.append("destiny", data.destiny);
    formData.append("date", data.date);
    formData.append("services", data.services);
    API.patch(`/petuser/${user._id}`, formData).then((res) => {
      logout();
      if (res) {
        navigate("/login");
        Swal.fire("Profile edited, please log in again");
      }
    });
  };

  
  return (
    <section className="profile">
      <h2>Profile</h2>
      <img src={user.avatar} alt="User avatar" />
      <form onSubmit={handleSubmit(formSubmit)}>
        <input
          type="text"
          id="username"
          name="username"
          {...register("username")}
          defaultValue={defaultValues.username}
        />
         <label htmlFor="owner">Owner</label>
        <input type="text" name="owner" id="owner" {...register("owner")}  defaultValue={defaultValues.owner}
 />
        <label htmlFor="petname">PetName</label>

        <input
          type="text"
          name="petname"
          id="petname"
          {...register("petname")}
          defaultValue={defaultValues.petname}

        />
        <label htmlFor="specie">Specie</label>
        <select {...register("specie")}defaultValue={defaultValues.specie}>
        <option value="cat">Cat</option>
        <option value="dog">Dog</option>
        <option value="rabbit">Rabbit</option>
        <option value="bird">Bird</option>
        </select>


        <label htmlFor="breed">Breed</label>
        <input type="text" name="breed" id="breed" {...register("breed")} defaultValue={defaultValues.breed}/>
        <label htmlFor="weight">Weight</label>
        <input
          type="number"
          name="weight"
          id="weight"
          {...register("weight")}
          defaultValue={defaultValues.weight}

        />

        <label htmlFor="origin">origin</label>
        <input type="text" name="origin" id="origin" {...register("origin")}  defaultValue={defaultValues.origin}
/>
        <label htmlFor="destiny">destiny</label>
        <input
          type="text"
          name="destiny"
          id="destiny"
          {...register("destiny")}
          defaultValue={defaultValues.destiny}

        />
        <label htmlFor="date">date</label>
        <input
          type="date"
          min="1980-01-01"
          max="2030-12-31"
          id=""
          {...register("date")}
          defaultValue={defaultValues.date}

        />
        <label htmlFor="services">Services</label>
        <select {...register("services")}defaultValue={defaultValues.services}>
        <option value="">Select...</option>
        <option value="hold">Hold</option>
        <option value="cabin">Cabin</option>
        </select>
         
        
        <input type="file" id="avatar" name="avatar" {...register("avatar")} />
        {user ? (
      <>
      <button type="submit">Edit</button>
      <button type="button" onClick={() => deletePet(user)}>Delete</button>
      </>
      ) : null}
        
      </form>
    </section>
  );
};

export default Profile;

