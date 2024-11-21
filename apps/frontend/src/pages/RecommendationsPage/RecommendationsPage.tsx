import './RecommendationsPage.css';

const RecommendationsPage = () => {
  return (
    <>
      <header>
        <h1>Перегляд Рекомендацій</h1>
      </header>

      <div className='main'>
        <div className='owner-info'>
          <h2>Рекомендації для власника: Іван Іванов</h2>
          <p>Ось декілька рекомендацій для догляду за вашими тваринами:</p>
        </div>

        <div className='recommendation-card'>
          <h3>Барсик (Кіт, Сіамський)</h3>
          <p>Рекомендація: Регулярно перевіряйте стан зубів і проводьте чистку.</p>
          <p>Статус здоров'я: Здоровий</p>
        </div>

        <div className='recommendation-card'>
          <h3>Рекс (Собака, Вівчарка)</h3>
          <p>
            Рекомендація: Вакцинуйте проти сказу, рекомендується проводити вакцинацію
            кожні 3 роки.
          </p>
          <p>Статус здоров'я: Очікується вакцинація</p>
        </div>

        <div className='recommendation-card'>
          <h3>Жорік (Папуга, Хвилястий)</h3>
          <p>
            Рекомендація: Регулярно додавайте вітаміни до раціону, особливо в зимовий
            період.
          </p>
          <p>Статус здоров'я: Здоровий</p>
        </div>
      </div>
    </>
  );
};

export default RecommendationsPage;
