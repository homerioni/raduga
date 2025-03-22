import Image from 'next/image';
import Link from 'next/link';
import { Category as TCategory } from '@prisma/client';
import { routes } from '../../../constants/routes';
import s from './styles.module.scss';

type TCategoryProps = Pick<TCategory, 'name' | 'imageUrl' | 'linkName'> & {
  childrenCategory: Pick<TCategory, 'name' | 'id' | 'linkName'>[];
};

export const Category = ({ name, imageUrl, linkName, childrenCategory }: TCategoryProps) => {
  const link = `${routes.catalog}/${linkName}/`;

  return (
    <div className={s.main}>
      <div className={s.wrapper}>
        <Link href={link} className={s.img}>
          {imageUrl && <Image src={imageUrl} alt="" width={400} height={400} />}
        </Link>
        <Link href={link} className={s.name}>
          {name}
        </Link>
        <ul className={s.list}>
          {childrenCategory.map((category) => (
            <li key={category.id} className={s.listItem}>
              <Link href={link + category.linkName}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
