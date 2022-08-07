import { Link } from "react-router-dom";
import axios from "axios";

function BasicExample() {
  async function resetDataBase() {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/reset`
    );
    console.log(response);
  }

  return (
    <div className="nav-container">
      <nav className="navbar">
        <Link to="/" className="nav-link">
          El Galpón
        </Link>
        <Link to="/" className="nav-link">
          Cartelera
        </Link>
        <Link to="/" className="nav-link">
          Noticias
        </Link>
        <Link to="/" className="nav-link">
          Sobre nosotros
        </Link>
        <button onClick={resetDataBase} className="nav-link">
          Resetear base de datos
        </button>
      </nav>
    </div>
  );
}

export default BasicExample;
