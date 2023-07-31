import "/src/components/PokedexPage/styles/Footer.css";
import pokeball from '/src/assets/img/pokeball.png'

const Footer = () => {
  return (
    <div className="footer">
      <img className="footer__logo" src={pokeball} />
      <p className="footer__text">
        © 2023 Pokémon Company, All rights reserved
      </p>
    </div>
  );
};

export default Footer;
