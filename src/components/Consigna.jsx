import { Container, Button} from "react-bootstrap";
// import Map from "./Map";
import { useAuth } from "../context/AuthContext";
import { NavLink } from "react-router-dom";

export const Consigna = () => {
  const { user } = useAuth();
  return (
    <Container className="mt-4">
      <h1>¡Publica gratis!</h1>

      <h3>Dejá tu auto en La Cochera y llevate otro mejor. Te ayudamos a cambiarlo. O simplemente dejanos tu auto que te ayudamos a venderlo.</h3>
      {/* <Map/> */}
      <div>
        <h3>¿Querés ganar tiempo?:</h3>
        {user ? (
          <div>
            <p>Cargá ya datos del automotor que querés vender o cambiar</p>
            <p>Si no estás seguro de algún dato, no te preocupes, después lo corregimos</p>
            <NavLink to="/newvehicle">
              <Button>Cargar Automotor</Button>
            </NavLink>
          </div>
        ) : (
          <div>
            <p>Inicia sesión para cargar automotores</p>
            <NavLink to="/login">
              <Button>Loguearse</Button>
            </NavLink>
          </div>
        )}
      </div>
    </Container>
  );
};