const MedicalBookPage = () => {
  return (
    <>
      <header>
        <h1>Медкнига</h1>
      </header>
      <div className="content">
        <form className="container">
          <div className="section">
            <label htmlFor="animal">For Animal:</label>
            <input type="text" id="animal" name="animal"/>
          </div>

          <div className="section">
            <label htmlFor="records">Records (Readonly):</label>
            <input type="text" id="records" name="records" readOnly/>
          </div>

          <div className="button-group">
            <button type="submit">Зберегти</button>
            <button type="reset">Почати заново</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MedicalBookPage;
