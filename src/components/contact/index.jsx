import {
  FaTiktok,
  FaYoutube,
  FaInstagramSquare,
  FaFacebook,
} from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import "./index.css";

function Contact() {
  return (
    <>
      <footer>
        <div className="content__columns-footer" id="contact">
          <h2 className="subtitle__footer">Nosotros</h2>
          <p>
            En Cliente Final somos unos apasionados de la comida, con un paladar
            exigente y amor por todo lo gastronómico. Nuestra misión es recorrer
            los diversos paisajes culinarios, desde establecimientos de comidas
            gourmet hasta joyas escondidas de comida callejera, y brindarle
            reseñas gastronómicas honestas, esclarecedoras y entretenidas.
          </p>
        </div>
        <div className="content__columns-footer">
          <h2 className="subtitle__footer">Encuéntranos en</h2>
          <ul>
            <div>
              <li className="link__footer">
                <a
                  href="https://www.tiktok.com/@rezealiantlivin?lang=es"
                  without
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaTiktok />
                </a>
              </li>
              <li className="link__footer">
                <a
                  href="https://www.facebook.com/elclientefinal?mibextid=ZbWKwL"
                  without
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="link__footer">
                <a
                  href="https://www.threads.net/@el_cliente_final?fbclid=IwAR3W7K6l4dC89Po3R4DXhoL5u6TGYbv5DGdeKbw-wXZ-gX21QNzJB5Xxrto"
                  without
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaThreads />
                </a>
              </li>
              <li className="link__footer">
                <a
                  href="https://www.youtube.com/@el_cliente_final"
                  without
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaYoutube />
                </a>
              </li>
              <li className="link__footer">
                <a
                  href="https://www.instagram.com/el_cliente_final/"
                  without
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaInstagramSquare />
                </a>
              </li>
            </div>
          </ul>
        </div>
        <div className="content__columns-footer">
          <h2 className="subtitle__footer">Ubicacion</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124838.69974022424!2d-86.34086159686323!3d12.09781471371201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f71560dd907880b%3A0x6c5ef4a2144f4c6a!2sManagua!5e0!3m2!1sen!2sni!4v1695398783250!5m2!1sen!2sni"
            width="100%"
            height="200"
            title="map"
            loading="lazy"
          ></iframe>
        </div>
      </footer>
      <div className="text__footer">
        <p>© 2023 El Cliente Final</p>
      </div>
    </>
  );
}
export default Contact;
