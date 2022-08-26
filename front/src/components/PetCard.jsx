import "./PetCard.css"

const PetCard = ({pet}) => {
    return (
    <figure className="petcard">
    <h4 className="name">{pet.petname}</h4>
    <img src={pet.imagen} alt={pet.petname} />
    <h5 className="specie">Specie : {pet.specie}</h5>
    <h5 className="breed">Breed : {pet.breed}</h5>
    <h5 className="origin">City of departure:{pet.origin}</h5>
    <h5 className="destiny">City of destination :{pet.destiny}</h5>
    </figure>
    )
}

export default PetCard