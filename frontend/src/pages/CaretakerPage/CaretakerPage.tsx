import "./CaretakerPage.css";

const CaretakerPage = () => {
  return (
    <>
      <header>
        <h1>Ветеринарний Опікун</h1>
      </header>
      <div className="content">
        <h2>Сторінка для опікунів тварин</h2>
        <p>Ось тварини, що знаходяться під вашою опікою:</p>

        <div className="animal-list">
          <div className="animal">
            <h3>Ім'я: Мурка</h3>
            <p>Порода: Сіамська кішка</p>
            <p>Вік: 2 роки</p>
            <p>Стан: Здоровий</p>
            <button>Переглянути рекомендації</button>
          </div>
          <div className="animal">
            <h3>Ім'я: Джек</h3>
            <p>Порода: Лабрадор</p>
            <p>Вік: 4 роки</p>
            <p>Стан: Потребує вакцинації</p>
            <button>Переглянути рекомендації</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaretakerPage;
