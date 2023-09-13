import Reviews from "./components/reviews";
import NavbarMenu from "./components/navbar";
import Contact from "./components/contact";
import FormContact from "./components/formcontact";
import Hero from "./components/hero";
import "./App.css";

function App() {
  return (
    <>
      <NavbarMenu />
      <Hero />
      <Reviews />
      <FormContact />
      <Contact />
    </>
  );
}

export default App;
