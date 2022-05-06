import 'regenerator-runtime/runtime';
import { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import filterImage from '../../assets/images/filterImage.png';

import './Table.scss';

export const Table = () => {
    const { tableContent, tableContentCurrent } = useTypedSelector(
        (tableState) => tableState.tableReducer,
    );
    const { getResult } = useTypedSelector(
        (requestState) => requestState.sendRequestReducer,
    );
    const { isFiltered, filteredList, activeFilter } = useTypedSelector(
        (filterState) => filterState.filterReducer,
    );
    const {
        sendGet, saveTableContent, turnOffFilter, turnOnFilter, changeTableContent,
    } = useActions();

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
        sendGet(url, headers);
    }, []);

    useEffect(() => {
        changeTableContent(getResult);
        saveTableContent(getResult);
    }, [getResult]);

    useEffect(() => {
        if (isFiltered) changeTableContent(filteredList);
        else changeTableContent(tableContent);
    }, [activeFilter]);

    const filtering = (event: EventTarget) => {
        const elem = event as HTMLElement;
        if (activeFilter === elem.dataset.filterby) {
            turnOffFilter();
        } else if (elem.dataset.filterby !== undefined) {
            turnOnFilter(elem.dataset.filterby, tableContent);
        }
    };

    return (
        <main>
            <table>
                <tbody>
                    <tr>
                        <th>
                            <div
                                className="filteringBtn"
                                aria-label="filter values"
                                onClick={(e) => filtering(e.target)}
                                onKeyUp={(e) => filtering(e.target)}
                                data-filterby="id"
                                role="button"
                                tabIndex={0}
                            />
                            <p>ID</p>
                            <img src={filterImage} alt="filter" />
                        </th>
                        <th>
                            <div
                                className="filteringBtn"
                                aria-label="filter values"
                                onClick={(e) => filtering(e.target)}
                                onKeyUp={(e) => filtering(e.target)}
                                data-filterby="title"
                                role="button"
                                tabIndex={0}
                            />
                            <p>Заголовок</p>
                            <img src={filterImage} alt="filter" />
                        </th>
                        <th>
                            <div
                                className="filteringBtn"
                                aria-label="filter values"
                                onClick={(e) => filtering(e.target)}
                                onKeyUp={(e) => filtering(e.target)}
                                data-filterby="body"
                                role="button"
                                tabIndex={0}
                            />
                            <p>Описание</p>
                            <img src={filterImage} alt="filter" />
                        </th>
                    </tr>
                    {tableContentCurrent.map((item) => {
                        const { id, title, body } = item;
                        return (
                            <tr key={`tableItem-${id}`}>
                                <td>{id}</td>
                                <td>{title}</td>
                                <td>{body}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </main>
    );
};
