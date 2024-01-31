import { useNavigate } from "react-router-dom";

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
      <div>
        <h1>Sébastien LACOUR</h1>
      </div>
      <ul>
        <li>
          <button className="connexion" type="button" onClick={hAccountClick}>
            connexion
          </button>
        </li>
        {user !== null && (
          <li>
            <button
              type="button"
              className="navButton"
              data-description="Déconnexion 🚫"
              onClick={hLogout}
            >
              <img src={Logout} alt="Se déconnecter" />
            </button>
          </li>
        )}

        {openModal && <Modal closeModal={setOpenModal} />}
      </ul>
    </nav>
  );
}

export default Navbar;
