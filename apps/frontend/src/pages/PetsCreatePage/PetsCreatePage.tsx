import './PetsCreatePage.css';

const PetsCreatePage = () => {
  return (
    <>
      <header>
        <h1>Реєстрація Тварин</h1>
      </header>
      <div className='content'>
        <h2>Зареєструйте свою тварину</h2>
        <form>
          <div className='input-shell'>
            <label htmlFor='animal-name'>Ім'я Тварини</label>
            <input
              type='text'
              id='animal-name'
              name='animal-name'
              placeholder="Введіть ім'я тварини"
            />
          </div>

          <div className='input-shell'>
            <label htmlFor='animal-breed'>Порода Тварини</label>
            <input
              type='text'
              id='animal-breed'
              name='animal-breed'
              placeholder='Введіть породу тварини'
            />
          </div>

          <div className='input-shell'>
            <label htmlFor='animal-age'>Вік Тварини</label>
            <input
              type='number'
              id='animal-age'
              name='animal-age'
              placeholder='Введіть вік тварини'
            />
          </div>

          <div className='input-shell'>
            <label htmlFor='animal-age'>Стать тварини</label>
            <input
              type='number'
              id='animal-sex'
              name='animal-age'
              placeholder='Введіть стать тварини'
            />
          </div>

          <button type='submit'>Зареєструвати</button>
        </form>
      </div>
    </>
  );
};

export default PetsCreatePage;
