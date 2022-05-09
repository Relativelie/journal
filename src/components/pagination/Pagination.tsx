import { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import './Pagination.scss';

interface PaginateOptions {
    [key: string]: number
}

export const Pagination = () => {
    const { allPages, currentPage } = useTypedSelector(
        (paginateState) => paginateState.paginationReducer,
    );
    const { changeCurrentPage } = useActions();

    useEffect(() => {
        changeCurrentPage(1);
    }, [allPages]);

    const range = (start: number, end: number) => {
        return Array(end - start + 1)
            .fill(undefined)
            .map((_, idx) => start + idx);
    };

    const paginateOptions: PaginateOptions = {
        next: currentPage + 1,
        prev: currentPage - 1,
    };

    const moveToAnotherPage = (e: EventTarget, type: string) => {
        const elem = e as HTMLElement;
        let value:number;
        if (type !== 'other') {
            value = paginateOptions[type];
        } else value = parseInt(elem.innerText, 10);
        changeCurrentPage(value);
    };

    const paginateItemClass = (value: number) => {
        const activeClass = 'pagination__number_isActive';
        const ordinaryClass = 'pagination__number';
        if (value === currentPage) {
            return `${ordinaryClass} ${activeClass}`;
        }
        return `${ordinaryClass}`;
    };

    return (
        <div className="pagination">
            <p
                className="pagination__option"
                onClick={(e) => moveToAnotherPage(e.target, 'prev')}
                onKeyUp={(e) => moveToAnotherPage(e.target, 'prev')}
                role="presentation"
            >
                Назад
            </p>
            <div className="pagination__numbers">
                {[...range(1, allPages)].map((item) => (
                    <p
                        key={`paginatePage-${item}`}
                        className={paginateItemClass(item)}
                        onClick={(e) => moveToAnotherPage(e.target, 'other')}
                        onKeyUp={(e) => moveToAnotherPage(e.target, 'other')}
                        role="presentation"
                    >
                        {item}
                    </p>
                ))}
            </div>
            <p
                className="pagination__option"
                onClick={(e) => moveToAnotherPage(e.target, 'next')}
                onKeyUp={(e) => moveToAnotherPage(e.target, 'next')}
                role="presentation"
            >
                Вперед

            </p>
        </div>
    );
};
