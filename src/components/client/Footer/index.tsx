import s from './styles.module.scss';

export const Footer = () => (
  <footer className={s.main}>
    <div className="container">
      <div className={s.date}>
        <h2>Время работы</h2>
        <p>ПН-ПТ: 10:00 - 18:00</p>
        <p>СБ: 10:00 - 16:00</p>
        <p>ВС: выходной</p>
      </div>
      <div className={s.desc}>
        <p>
          Услуги оказывает ИП Горбаль Светлана Викторовна, УНП 400017957. Сайт носит исключительно
          информационный характер и не является интернет-магазином!
        </p>
        <p>2025. Книжный магазин &#34;Радуга&#34;</p>
      </div>
    </div>
  </footer>
);
