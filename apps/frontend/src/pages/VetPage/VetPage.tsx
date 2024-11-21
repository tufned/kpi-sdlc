import './VetPage.css';

const VetPage = () => {
  return (
    <>
      <header>
        <h1>Ветеринар</h1>
      </header>
      <div className='content'>
        <h2>Ласкаво просимо на сторінку ветеринара!</h2>
        <p>Ось список тварин, що знаходяться під вашою опікою:</p>

        <div className='animal-list'>
          <div className='animal'>
            <h3>Ім'я: Барсик</h3>
            <p>Порода: Шотландський висловухий</p>
            <p>Вік: 3 роки</p>
            <p>Статус: Щорічний огляд та вакцинація</p>
            <button>Переглянути медичну книгу</button>
          </div>
          <div className='animal'>
            <h3>Ім'я: Рекс</h3>
            <p>Порода: Німецька вівчарка</p>
            <p>Вік: 5 років</p>
            <p>Статус: Щоквартальний огляд</p>
            <button>Переглянути медичну книгу</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VetPage;
