import "./PetCard.css";

const PetCard = ({ petuser }) => {
  return (
    <figure className="petcard">
      <h4 className="name">{petuser.petname}</h4>
      <img src={petuser.avatar} alt={petuser.petname} />
      <h5 className="specie">Specie : {petuser.specie}</h5>
      <h5 className="breed">Breed : {petuser.breed}</h5>
      <h5 className="origin">City of departure:{petuser.origin}</h5>
      <h5 className="destiny">City of destination :{petuser.destiny}</h5>
      <h5 className="services">CABINA O BODEGA :{petuser.serices}</h5>
    </figure>
  );
};

export default PetCard;
