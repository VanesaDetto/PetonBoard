import "./SearchBar.css";

const SearchBar = ({ setFilterWord }) => {
  return (
    <input
      type="text"
      id="search"
      className="searchbar"
      onChange={() => setFilterWord(search.value.toLowerCase())}
      placeholder="Search by petname, specie, origin or destiny"
    />
  );
};

export default SearchBar;
