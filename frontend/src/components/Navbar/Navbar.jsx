import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <h1>Sébastien LACOUR</h1>
      </div>
      <div>
        <button className="connexion" type="button">
          connexion
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
