const Catalog = () => {
  return (
    <section className="catalog">
      <nav className="container">
        <ul className="catalog__menu">
          <li className="catalog__menu-item">
            <a href="#">Тестовый айтем</a>
            <div className="catalog__content">
              <button type="button" className="catalog__back-link mobile">
                Тестовый айтем
              </button>
              <div className="catalog__list-box">
                <a href="#" className="catalog__list-name">
                  Наименование
                </a>
                <ul className="catalog__list">
                  <li className="catalog__back-link mobile">Наименование</li>
                  <li className="catalog__list-item">
                    <a href="#">Первый элемент</a>
                  </li>
                  <li className="catalog__list-item">
                    <a href="#">Второй элемент</a>
                  </li>
                  <li className="catalog__list-item">
                    <a href="#">Третий элемент</a>
                  </li>
                  <li className="catalog__list-item">
                    <a href="#">Четвертый элемент</a>
                  </li>
                </ul>
              </div>
              <div className="catalog__list-box">
                <a href="#" className="catalog__list-name">
                  Наименование
                </a>
              </div>
              <div className="catalog__list-box">
                <a href="#" className="catalog__list-name">
                  Наименование
                </a>
                <ul className="catalog__list">
                  <li className="catalog__back-link mobile">Наименование</li>
                  <li className="catalog__list-item">
                    <a href="#">Первый элемент</a>
                  </li>
                  <li className="catalog__list-item">
                    <a href="#">Второй элемент</a>
                  </li>
                  <li className="catalog__list-item">
                    <a href="#">Третий элемент</a>
                  </li>
                  <li className="catalog__list-item">
                    <a href="#">Четвертый элемент</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="catalog__menu-item">
            <a href="#">Тестовый пункт</a>
          </li>
          <li className="catalog__menu-item">
            <a href="#">Тест айтем</a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Catalog;
