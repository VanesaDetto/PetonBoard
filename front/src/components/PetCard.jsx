import "./PetCard.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../contexts/jwtContext";
import { useState } from "react";
import { API } from "../services/API";
import Swal from "sweetalert2";

const PetCard = ({ petuser }) => {
  const { user, setEditingPet } = useContext(JwtContext);
  const [Encuesta, setEncuesta] = useState("");
  let navigate = useNavigate();

  return (
    <figure className="petcard">
      <h4 className="name"> {petuser.petname}</h4>
      <img src={petuser.avatar} alt={petuser.petname} />
      <h5 className="specie">Specie: {petuser.specie}</h5>
      <h5 className="breed">Breed: {petuser.breed}</h5>
      <h5 className="origin">City of departure: {petuser.origin}</h5>
      <h5 className="destiny">City of destination: {petuser.destiny}</h5>
      <h5 className="services">Services: {petuser.services}</h5>

      {user ? (
        <>
          <div className="buttonencuesta">
            <div>
              <button onClick={() => setEncuesta("Thank you mate! 🥰")}>
                👍
              </button>
              <button onClick={() => setEncuesta("I hate you! 🤬")}>👎</button>
            </div>
            <div>
              <p>{Encuesta}</p>
            </div>
          </div>
        </>
      ) : null}
    </figure>
  );
};

export default PetCard;
