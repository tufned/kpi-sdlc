const PetsPage = () => {
  return (
    <>
      <header>
        <h1>Тварини</h1>
      </header>

      <div className="main">
        <div className="pet-card">
          <h3>Тварина: Барсик</h3>
          <p>Порода: Кіт, Сіамський</p>
          <p>Вік: 2 роки</p>
          <p>Стать: Хлопчик</p>
          <button>Стати опікуном</button>
        </div>

        <div className="pet-card">
          <h3>Тварина: Рекс</h3>
          <p>Порода: Собака, Вівчарка</p>
          <p>Вік: 5 років</p>
          <p>Стать: Дівчинка</p>
          <button>Стати опікуном</button>
        </div>

        <div className="pet-card">
          <h3>Тварина: Жорік</h3>
          <p>Порода: Папуга, Хвилястий</p>
          <p>Вік: 1 рік</p>
          <p>Стать: Хлопчик</p>
          <button>Стати опікуном</button>
        </div>

      </div>
    </>
  );
};

export default PetsPage;
