import s from './styles.module.scss';

type TBackBtnProps = {
  onClick: () => void;
};

const BackBtn = ({ onClick }: TBackBtnProps) => (
  <button
    type="button"
    className={s.backBtn}
    onClick={(e) => {
      e.stopPropagation();
      onClick();
    }}
  >
    Назад
  </button>
);

export default BackBtn;
