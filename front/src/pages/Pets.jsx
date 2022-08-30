import { useEffect, useState } from "react";
import PetCard from "../components/PetCard";
import SearchBar from "../components/SearchBar";
import { API } from "../services/API";
import "./Pets.css";

const Pets = () => {
  const [allPets, setAllPets] = useState([]);
  const [filterWord, setFilterWord] = useState("");

  const filteredPets = allPets.filter(
    (petuser) =>
      petuser.petname.toLowerCase().includes(filterWord) ||
      petuser.specie.toLowerCase().includes(filterWord) ||
      petuser.origin.toLowerCase().includes(filterWord) ||
      petuser.destiny.toLowerCase().includes(filterWord)
  );

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
      <h2>Our Friends</h2>
      <SearchBar setFilterWord={setFilterWord} />
      <div className="galeria">
        {allPets.length ? (
          filteredPets.map((pet) => <PetCard petuser={pet} key={pet._id} />)
        ) : (
          <p>Loading pets...</p>
        )}
      </div>
      {!filteredPets.length ? <p>Pets not found</p> : null}
    </section>
  );
};

export default Pets;
