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
    }, 11000);

    // Nettoie le timeout lorsque le composant est démonté
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
      <div className="a-long-time-ago">
        <p>A long time ago, in a galaxy far,</p>
        <p>far away..</p>
      </div>
      <table className="stacks">
        <tr>
          <img src={JS} alt="javascript" />
        </tr>
        <tr>
          <img src={CSS} alt="javascript" />
        </tr>
        <tr>
          <img src={Git} alt="javascript" />
        </tr>
        <tr>
          <img src={GitHUB} alt="javascript" />
        </tr>
        <tr>
          <img src={HTML5} alt="javascript" />
        </tr>
        <tr>
          <img src={MySQL} alt="javascript" />
        </tr>
        <tr>
          <img src={nodeJS} alt="javascript" />
        </tr>
        <tr>
          <img src={REACT} alt="javascript" />
        </tr>
        <tr>
          <img src={VSCODE} alt="javascript" />
        </tr>
      </table>
      <div className="crawl" ref={crawlRef}>
        <div>
          <p>
            It is a period of civil war. Rebel spaceships, striking from a
            hidden base, have won their first victory against the evil Galactic
            Empire.
          </p>
          <p>
            During the battle, Rebel spies managed to steal secret plans to the
            Empire's ultimate weapon, the DEATH STAR, an armored space station
            with enough power to destroy an entire planet.
          </p>
        </div>
      </div>
    </>
  );
}

export default Accueil;
