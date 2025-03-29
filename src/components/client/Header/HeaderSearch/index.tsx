'use client';

import { FormEvent, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { routes } from '../../../../constants';
import SearchIcon from '../../../icons/SearchIcon';
import s from './styles.module.scss';

export const HeaderSearch = () => {
  const [search, setSearch] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);

  const router = useRouter();

  const focusToggle = () => setIsFocused((prev) => !prev);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsFocused(false);
    setSearch('');
    inputRef.current?.blur();
    router.push(`${routes.catalog}?search=${search}`);
  };

  return (
    <>
      <div className={`${s.main} ${isFocused ? s.show : ''}`}>
        {isFocused && <div className={s.bg} onClick={focusToggle} />}
        <form className={s.searchForm} onSubmit={onSubmit}>
          <label className={s.search}>
            <input
              ref={inputRef}
              type="text"
              placeholder="Что хотите найти?"
              name="ra-search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onFocus={focusToggle}
            />
          </label>
          <button type="submit">
            <SearchIcon />
          </button>
        </form>
      </div>
      <button
        className={`${s.searchBtn} mobile`}
        type="button"
        onClick={() => inputRef.current?.focus()}
      >
        <SearchIcon />
      </button>
    </>
  );
};
