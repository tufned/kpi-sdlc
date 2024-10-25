import "./ProceduresPage.css";

const ProceduresPage = () => {
  return (
    <>
      <header>
        <h1>Перегляд Процедур</h1>
      </header>

      <div className="main">
        <div className="owner-info">
          <h2>Процедури для власника: Іван Іванов</h2>
          <p>Ось список запланованих і виконаних процедур для ваших тварин:</p>
        </div>

        <div className="procedure-card">
          <h3>Барсик (Кіт, Сіамський)</h3>
          <p>Процедура: Чистка зубів</p>
          <p>Статус: Виконано</p>
          <p>Дата: 15 серпня 2024</p>
        </div>

        <div className="procedure-card">
          <h3>Рекс (Собака, Вівчарка)</h3>
          <p>Процедура: Вакцинація від сказу</p>
          <p>Статус: Заплановано</p>
          <p>Дата: 28 жовтня 2024</p>
        </div>

        <div className="procedure-card">
          <h3>Жорік (Папуга, Хвилястий)</h3>
          <p>Процедура: Обстеження у ветеринара</p>
          <p>Статус: Виконано</p>
          <p>Дата: 10 липня 2024</p>
        </div>
      </div>
    </>
  );
};

export default ProceduresPage;
