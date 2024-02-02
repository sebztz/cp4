import React, { useEffect, useRef } from "react";
import JS from "../../assets/JS.png";
import CSS from "../../assets/CSS.png";
import Git from "../../assets/Git.png";
import GitHUB from "../../assets/GitHUB.png";
import HTML5 from "../../assets/HTLM5.png";
import MySQL from "../../assets/MySQL.png";
import nodeJS from "../../assets/nodeJS.png";
import REACT from "../../assets/REACT.png";
import VSCODE from "../../assets/VSCODE.png";

import "./Accueil.scss";

function Accueil() {
  const crawlRef = useRef(null);

  useEffect(() => {
    // Mettre en pause l'animation crawl après 15 secondes
    const timeoutId = setTimeout(() => {
      if (crawlRef.current) {
        crawlRef.current.classList.add("paused");
      }
    }, 10250);

    // Nettoie le timeout lorsque le composant est démonté
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
      <div className="a-long-time-ago">
        <p>A long time ago, in a galaxy far,</p>
        <p>far away..</p>
      </div>
      <h1 className="titre-projets">Projets</h1>
      <div className="projets">
        <div>
          <img src="" alt="" />
          <h2 className="title">description:</h2>
          <p>gallerie d'oeuvre d'art sur la Réunion </p>
          <a
            href="https://afac974.remote-fr-2.wilders.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            afac974
          </a>
          <h2 className="title">équipe</h2>
          <p>Doriane </p>
          <p>Clément </p>
          <p>Francois</p>
          <p>Sébastien </p>
        </div>

        <div>
          <img src="" alt="" />
          <h2 className="title">description:</h2>
          <p>jeu de création de potions</p>
          <a
            href="https://github.com/WildCodeSchool-2023-09/JS-RemoteFR-SACOD-P2-Vogue-Merry/tree/main"
            target="_blank"
            rel="noopener noreferrer"
          >
            Elixir Maker - The Game
          </a>
          <h2 className="title">équipe</h2>
          <p>Baris </p>
          <p>Elie </p>
          <p>Morgane </p>
          <p>Christophe </p>
          <p>Sébastien </p>
        </div>
        <div>
          <img src="" alt="" />
          <h2 className="title">description:</h2>
          <p> book des wilders</p>
          <a
            href="https://bookofwilders.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            bookofwilders
          </a>
          <h2 className="title">équipe</h2>
          <p>Baptiste </p>
          <p>Mehdi </p>
          <p>Jonathan </p>
          <p>Souhir </p>
          <p>Sébastien </p>
        </div>
        <div>
          <img src="" alt="" />
          <h2 className="title">description:</h2>
          <p>vente objet de noel</p>
          <a
            href="https://github.com/Enagrom5/Hackathon-wcs-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hackaton vente objet de noel
          </a>
          <h2 className="title">équipe</h2>
          <p>Morgane </p>
          <p>Elie </p>
          <p>Souhir </p>
          <p>Alexandre </p>
          <p>Sébastien </p>
        </div>
      </div>
      <table className="stackTableau">
        <tbody className="stacks">
          <tr>
            <td>
              <img src={JS} alt="javascript" />
            </td>
          </tr>
          <tr>
            <td>
              <img src={CSS} alt="CSS" />
            </td>
          </tr>
          <tr>
            <td>
              <img src={Git} alt="Git" />
            </td>
          </tr>
          <tr>
            <td>
              <img src={GitHUB} alt="GitHUB" />
            </td>
          </tr>
          <tr>
            <td>
              <img src={HTML5} alt="HTML5" />
            </td>
          </tr>
          <tr>
            <td>
              <img src={MySQL} alt="MySQL" />
            </td>
          </tr>
          <tr>
            <td>
              <img src={nodeJS} alt="nodeJS" />
            </td>
          </tr>
          <tr>
            <td>
              <img src={REACT} alt="REACT" />
            </td>
          </tr>
          <tr>
            <td>
              <img src={VSCODE} alt="VSCODE" />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="crawl" ref={crawlRef}>
        <div>
          <p>En quelque mots :</p>
          <p>
            Je suis actuellement en formation develloppeur web et webmobile à la
            WILD CODE SCHOOL.
          </p>
          <p>
            J'ai choisi cette voie pour me reconvertir, car j'ai toujours été
            attiré par ce domaine.
          </p>
          <p> </p>
        </div>
      </div>
    </>
  );
}

export default Accueil;
