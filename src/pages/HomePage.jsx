import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setTrainerG } from "../store/slices/trainerName.slice";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import "/src/components/PokedexPage/styles/HomePage.css";
import pokedex from '/src/assets/img/pokedex.png'

const HomePage = () => {
  const inputTrainer = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setTrainerG(inputTrainer.current.value.trim()));
    navigate("/pokedex");
  };
  return (
    <>
      <div className="container">
        <img className="title" src={pokedex} alt="" />
        <h2 className="subtitle">Hi Trainer!</h2>
        <p className="advise">To start with the app, please give your name </p>
        <form className="form" onSubmit={handleSubmit}>
          <input className="input" ref={inputTrainer} type="text" />
          <button className="button">Gotta catch'em all!</button>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default HomePage;
