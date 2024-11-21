const RecommendationsCreatePage = () => {
  return (
    <>
      <header>
        <h1>Додати рекомендацію</h1>
      </header>
      <div className='content'>
        <form className='container'>
          <div className='section'>
            <label htmlFor='name'>Імʼя:</label>
            <input type='text' id='name' name='name' />
          </div>

          <div className='section'>
            <label htmlFor='description'>Опис:</label>
            <input type='text' id='description' name='description' />
          </div>

          <div className='section'>
            <label htmlFor='createdFor'>Імʼя тварини:</label>
            <input type='text' id='createdFor' name='createdFor' />
          </div>

          <div className='button-group'>
            <button type='submit'>Зберегти</button>
            <button type='reset'>Почати заново</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RecommendationsCreatePage;
