import "/src/components/PokedexPage/styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <img className="footer__logo" src="/src/assets/img/pokeball.png" alt="" />
      <p className="footer__text">
        © 2023 Pokémon Company, All rights reserved
      </p>
    </div>
  );
};

export default Footer;
