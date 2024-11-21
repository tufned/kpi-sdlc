import './OwnerPage.css';

const OwnerPage = () => {
  return (
    <>
      <header>
        <h1>Сторінка Власника Тварини</h1>
      </header>

      <div className='main'>
        <div className='owner-info'>
          <h2>Ім'я Власника: Іван Іванов</h2>
          <p>Зареєстровані тварини: 3</p>
          <div className='buttons'>
            <button className='button'>Додати тварину</button>
            <button className='button'>Переглянути статус тварин</button>
            <button className='button'>Переглянути рекомендації</button>
            <button className='button'>Переглянути процедури</button>
          </div>
        </div>

        <div className='pet-card'>
          <h3>Тварина: Барсик</h3>
          <p>Порода: Кіт, Сіамський</p>
          <p>Вік: 2 роки</p>
          <p>Статус: Здоровий</p>
        </div>

        <div className='pet-card'>
          <h3>Тварина: Рекс</h3>
          <p>Порода: Собака, Вівчарка</p>
          <p>Вік: 5 років</p>
          <p>Статус: Очікується вакцинація</p>
        </div>

        <div className='pet-card'>
          <h3>Тварина: Жорік</h3>
          <p>Порода: Папуга, Хвилястий</p>
          <p>Вік: 1 рік</p>
          <p>Статус: Здоровий</p>
        </div>
      </div>
    </>
  );
};

export default OwnerPage;
