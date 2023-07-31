import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import "/src/components/PokedexPage/styles/PokeIdPage.css";

const PokeIdPage = () => {
  const { id } = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  const [pokemon, getSinglePokemon] = useFetch(url);

  useEffect(() => {
    getSinglePokemon();
  }, [id]);

const firstType = pokemon?.types[0].type.name

  return (
    <>
      <header className='header'>
        <img className="header__img" src="/src/assets/img/pokedex.png" alt="" />
      </header>
      <article className={`card__container ${firstType}-border`}>
        <img
          className={`img ${firstType}-gradient`}
          src={pokemon?.sprites.other["official-artwork"].front_default}
          alt=""
        />
        <h2 className={`name ${firstType}-color`}>{pokemon?.name}</h2>
        <ul className="pokecard__types">
          {pokemon?.types.map((typeInfo) => (
            <li className="pokecard__type__name" key={typeInfo.type.url}>
              {typeInfo.type.name}
            </li>
          ))}
        </ul>
        <hr className="hr" />
        <ul className="stats__list">
          {pokemon?.stats.map((statInfo) => (
            <li className="list" key={statInfo.stat.url}>
              <h4 className="habilities__names">{statInfo.stat.name}</h4>
              <span className={`habilities__value ${firstType}-color`}>{statInfo.base_stat}</span>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
};

export default PokeIdPage;
