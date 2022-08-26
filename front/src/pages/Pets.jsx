import {useEffect, useState} from "react";
import PetCard from "../components/PetCard";
import {API} from "../services/API"
import "./Pets.css"

const Pets = () => {
    const [allPets, setAllPets] = useState([]);

    const getAllPetusers = async () => {
        API.get("/petuser/getall").then((resPetuser) => {
            setAllPets(resPetuser.data.petuser);
        });
    };

    useEffect(() => {
        getAllPetusers();
    }, []);

    return (
    <section className="pets">
    <h2>Our pets</h2>
    <div className="galeria">
        {allPets.length ? (
        allPets.map((pet) => <p><PetCard pet={pet} key={pet._id}/></p>)
    ) : (
    <p>Loading pets...</p>
    )}
    </div>
    </section>)
}

export default Pets