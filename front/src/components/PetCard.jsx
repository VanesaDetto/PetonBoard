import "./PetCard.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {JwtContext} from "../contexts/jwtContext"
import { useState } from 'react';
import { API } from "../services/API";
import Swal from "sweetalert2";


const PetCard = ({ petuser }) => {
  const {user, setEditingPet} = useContext(JwtContext);
  const [timeOfDay, setTimeOfDay] = useState('S');
 let navigate = useNavigate();




  return (
    <figure className="petcard">
      <h4 className="name">{petuser.petname}</h4>
      <img src={petuser.avatar} alt={petuser.petname} />
      <h5 className="specie">Specie : {petuser.specie}</h5>
      <h5 className="breed">Breed : {petuser.breed}</h5>
      <h5 className="origin">City of departure:{petuser.origin}</h5>
      <h5 className="destiny">City of destination :{petuser.destiny}</h5>
      <h5 className="services">CABINA O BODEGA :{petuser.services}</h5>
      {petuser.services ? (<p className="cabina">Cabina</p>) : (<p className="bodega">Bodega</p>)}
      {user ? (
      <>
      <button onClick={() => setTimeOfDay('👍')}>👍</button>
      <button onClick={() => setTimeOfDay('👎')}>👎</button>
      <p>{timeOfDay === "👍" ? "Thank you mate! 🥰" : "I hate you! 🤬"}</p>
      </>
      ) : null}
    </figure>
  );
};

export default PetCard;
