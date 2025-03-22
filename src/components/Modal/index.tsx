'use client';

import { useRouter } from 'next/navigation';
import s from './styles.module.scss';

type TModalProps = {
  children: React.ReactNode;
};

export const ModalIntercepting = ({ children }: TModalProps) => {
  const router = useRouter();

  const onClose = () => {
    router.back();
  };

  return (
    <div className={s.main}>
      <button type="button" className={s.bg} onClick={onClose} />
      <div className={s.contentBox}>
        <button type="button" className={s.close} onClick={onClose} />
        <div className={s.content}>{children}</div>
      </div>
    </div>
  );
};
