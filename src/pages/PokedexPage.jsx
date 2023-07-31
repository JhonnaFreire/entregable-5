import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { useEffect, useRef, useState } from "react";
import PokeCard from "../components/PokedexPage/PokeCard";
import "/src/components/PokedexPage/styles/PokedexPage.css";

const PokedexPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const trainer = useSelector((reducer) => reducer.trainer);
  const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=300";
  const [pokemons, getAllPokemons] = useFetch(url);

  useEffect(() => {
    getAllPokemons();
  }, []);

  const inputSearch = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue(inputSearch.current.value.trim().toLowerCase());
    setCurrentPage(1);
  };

  const cbFilter = (poke) => poke.name.includes(inputValue);

  const indexOfLastPokemon = currentPage * itemsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - itemsPerPage;
  const currentPokemons = pokemons?.results
    .filter(cbFilter)
    .slice(indexOfFirstPokemon, indexOfLastPokemon);

  const totalPages = Math.ceil(
    pokemons?.results.filter(cbFilter).length / itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <header className="header">
        <img className="header__img" src="/src/assets/img/pokedex.png" alt="" />
      </header>
      <div className="body">
        <p className="welcome">
          <span className="welcome__paragraph">
            Welcome <span className="trainer__name">{trainer}</span>
          </span>
          , here you can find your favorite pokemon
        </p>
        <form className="form__page" onSubmit={handleSubmit}>
          <input className="input__bar" ref={inputSearch} type="text" />
          <button className="button__page">Search</button>
        </form>
        <div className="item__list">
          {currentPokemons?.map((poke) => (
            <PokeCard key={poke.url} url={poke.url} />
          ))}
        </div>
        <div className="buttons_container">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                className={`page-button ${
                  pageNumber === currentPage ? "active" : ""
                }`}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default PokedexPage;
