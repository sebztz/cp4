function Admin() {
  return (
    <>
      <h3 className="h3-myAccount">Ajouter un projet</h3>
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
            name="style"
            autoComplete="off"
            placeholder="Style"
            className=""
            type="text"
          />
        </div>
        <div>
          <input name="format" placeholder="Format" className="" type="text" />
        </div>

        <div className="button-add-container">
          <button type="submit" className="button-add">
            Ajouter 🖼️
          </button>
        </div>
      </form>{" "}
    </>
  );
}

export default Admin;
