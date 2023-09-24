import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../images/logo.png"
import "./index.css"

function NavbarMenu() {
  return (
    <header>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="white"
        data-bs-theme="white"
      >
        <Container>
          <Navbar.Brand href="#home"><img src={Logo} alt="logo el cliente final" width="80"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#critic">Calificaciones</Nav.Link>
              <Nav.Link href="#contact">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        <button className="btn btn-primary"><a href="#contact" className="text-white">Contáctanos</a></button>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavbarMenu;
