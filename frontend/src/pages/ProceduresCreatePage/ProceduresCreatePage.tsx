import "./ProceduresCreatePage.css";

const ProceduresCreatePage = () => {
  return (
    <>
      <header>
        <h1>Реєстрація тварини на процедуру</h1>
      </header>
      <div className="content">
        <form className="container">
          <h2>Додати процедуру</h2>

          <div className="section">
            <label htmlFor="procedureName">Імʼя процедури:</label>
            <input type="text" id="procedureName" name="procedureName"/>
          </div>

          <div className="section">
            <label htmlFor="procedureType">Тип процедури:</label>
            <input type="text" id="procedureType" name="procedureType"/>
          </div>

          <div className="section">
            <label htmlFor="procedureDate">Дата процедури:</label>
            <input type="datetime-local" id="procedureDate" name="procedureDate"/>
          </div>

          <div className="section">
            <label htmlFor="vetName">Виконує (ветеринар):</label>
            <input type="text" id="vetName" name="vetName"/>
          </div>

          <div className="section">
            <label htmlFor="animalName">Імʼя тварини:</label>
            <input type="text" id="animalName" name="animalName"/>
          </div>

          <div className="section">
            <label htmlFor="procedureCost">Ціна:</label>
            <input type="number" id="procedureCost" name="procedureCost" step="0.01"/>
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

export default ProceduresCreatePage;
