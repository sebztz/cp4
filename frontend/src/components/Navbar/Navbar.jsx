import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import { useUser } from "../../Contexts/ContextUser";
import Instance from "../../services/axios";
import Logout from "../../assets/logout2.png";

import "./Navbar.scss";
import Modal from "../Modal/Modal";

function Navbar() {
  const { user, setUser } = useUser();
  const nav = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const hLogout = () => {
    Instance.delete("/logout");
    setUser(null);
    nav("/");
  };

  const hAccountClick = () => {
    if (user) {
      nav("/admin");
    } else {
      setOpenModal(true);
    }
  };
  return (
    <nav className="navbar">
      <Link to="/">
        <div>
          <h1 className="name">Sébastien LACOUR</h1>
        </div>
      </Link>
      <ul className="mesbuttons">
        <li>
          <button type="button" className="connexion" onClick={hAccountClick}>
            connexion
          </button>
        </li>
        {user !== null && (
          <li>
            <button type="button" className="navButton" onClick={hLogout}>
              <img className="deconnexion" src={Logout} alt="Se déconnecter" />
            </button>
          </li>
        )}

        {openModal && <Modal closeModal={setOpenModal} />}
      </ul>
    </nav>
  );
}

export default Navbar;
