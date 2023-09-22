import React from "react";
import HeroImg from "../../images/1.jpg";
import "./index.css";

function Hero() {
  return (
    <>
      <section className="container__hero" id="home">
        <img src={HeroImg} alt="hero bg" loading="lazy" decoding="async" />
        <div className="content__hero">
          <h3>Bienvenido a El Cliente Final</h3>
          <h1>Tu destino de criticas de <br />higiene e inocuidad culinaria</h1>
          <a href="#contact">Contáctanos</a>
        </div>
      </section>
    </>
  );
}
export default Hero;
