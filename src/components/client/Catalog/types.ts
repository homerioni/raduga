export type TCatalogLink = {
  title: string;
  href: string;
};

type TCatalogImage =
  | {
      imgSrc: string;
      imgAlt: string;
    }
  | {
      imgSrc?: never;
      imgAlt?: never;
    };

export type TCatalogItem = TCatalogLink &
  TCatalogImage & {
    subItems: TCatalogLink[];
  };

export type TCatalogList = TCatalogLink & {
  imgSrc: string;
  imgAlt: string;
  items: TCatalogItem[];
};
