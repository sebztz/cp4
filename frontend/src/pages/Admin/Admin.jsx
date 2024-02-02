import "./Admin.scss";

function Admin() {
  return (
    <div className="box">
      <div>
        <h1 className="h1-myAccount">Ajouter un projet</h1>
      </div>
      <div>
        <form className="form-myAccount">
          <div>
            <input
              name="name"
              autoComplete="off"
              placeholder="NOM du Projet"
              className=""
              type="text"
            />
          </div>
          <div>
            <input
              name="date"
              autoComplete="off"
              placeholder="date de création"
              type="date"
            />
          </div>
          <div>
            <input
              name="description"
              autoComplete="off"
              placeholder="description"
              className=""
              type="text"
            />
          </div>
          <div>
            <input
              name="participant"
              placeholder="participant"
              className=""
              type="text"
            />
          </div>

          <div className="button-add-container">
            <button type="submit" className="button-add">
              Ajouter 🖼️
            </button>
          </div>
        </form>{" "}
      </div>
    </div>
  );
}

export default Admin;
