import Image from 'next/image';
import Link from 'next/link';
import s from './styles.module.scss';

type TCatalogLinkProps = {
  link: string;
  title: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
};

const CatalogLink = ({
  link,
  title,
  imageSrc,
  imageAlt = '',
  className,
}: TCatalogLinkProps) => (
  <Link
    href={link}
    className={`${s.main} ${className ?? ''}`}
    onClick={(e) => e.stopPropagation()}
  >
    {imageSrc && (
      <Image src={imageSrc} alt={imageAlt} width={120} height={120} />
    )}
    <h3>{title}</h3>
  </Link>
);

export default CatalogLink;
