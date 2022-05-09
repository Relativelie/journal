import { FC, MutableRefObject, useRef } from 'react';
import { useActions } from '../../hooks/useActions';
import searchImage from '../../assets/images/search.png';

import './Search.scss';

type Props = {
    data: any[]
};

export const Search:FC<Props> = ({ data }) => {
    const inputValue = useRef() as MutableRefObject<HTMLInputElement>;

    const { search } = useActions();

    const searchValue = () => {
        search(data, inputValue.current.value);
    };

    return (
        <div className="search">
            <input
                className="search__input"
                type="text"
                placeholder="Поиск"
                ref={inputValue}
                onChange={() => searchValue()}
            />
            <img
                className="search__image"
                src={searchImage}
                alt="search"
            />
        </div>
    );
};
