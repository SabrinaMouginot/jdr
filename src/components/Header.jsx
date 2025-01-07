import { Link } from "react-router-dom";

function Header() {
    return (
        <nav>
        <Link to="/">Accueil</Link> | 
        <Link to="/creation-personnage">Créer un personnage</Link> | 
        <Link to="/jeu">Jeu</Link>
      </nav>    );
  }
  
  export default Header;