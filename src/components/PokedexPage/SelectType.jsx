import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import "/src/components/PokedexPage/styles/SelectType.css";

const SelectType = ({ setSelectValue }) => {
  const url = "https://pokeapi.co/api/v2/type";
  const [types, getAllTypes] = useFetch(url);
  useEffect(() => {
    getAllTypes();
  }, []);

  const hanldeChange = (e) => {
    setSelectValue(e.target.value);
  };

  return (
    <article className="filter__container">
      <select className="filter__botton" onChange={hanldeChange}>
        <option className="filter__title" value="allPokemons">
          All Pokemons
        </option>
        {types?.results.map((type) => (
          <option className="filter__names" key={type.url} value={type.url}>
            {type.name}
          </option>
        ))}
      </select>
    </article>
  );
};

export default SelectType;
