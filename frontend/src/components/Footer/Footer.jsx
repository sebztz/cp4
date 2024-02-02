import "./Footer.scss";

function Footer() {
  const redirectToUrl = (url) => {
    window.open(url, "_blank");
  };

  return (
    <footer className="footer">
      <div className="top-content">
        <button
          type="button"
          className="gif-button"
          onClick={() => redirectToUrl("https://github.com/sebztz")}
        >
          <img
            className="gif-image"
            src="github.gif"
            alt="GIF Réseau Social 1"
          />
        </button>
        <button
          type="button"
          className="gif-button"
          onClick={() => redirectToUrl("https://www.instagram.com/sebztz/")}
        >
          <img
            className="gif-image"
            src="instagram.gif"
            alt="GIF Réseau Social 2"
          />
        </button>
        <button
          type="button"
          className="gif-button"
          onClick={() =>
            redirectToUrl("www.linkedin.com/in/sébastien-lacour-419906294")
          }
        >
          <img
            className="gif-image"
            src="linkedin.gif"
            alt="GIF Réseau Social 3"
          />
        </button>
      </div>
      <div className="back-content">
        <p>© Sébastien LACOUR</p>
      </div>
    </footer>
  );
}

export default Footer;
