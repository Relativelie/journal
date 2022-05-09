import 'regenerator-runtime/runtime';
import { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Pagination } from '../pagination/Pagination';
import { Search } from '../search/Search';
import { Table } from '../table/Table';
import { TableBody } from '../table/tableBody/TableBody';
import { TableHead } from '../table/tableHead/TableHead';
import './App.scss';
import { LoadingSpinner } from '../loadingSpinner/LoadingSpinner';

function App() {
    const { content } = useTypedSelector((tableState) => tableState.tableReducer);
    const { searchingItem, searchList } = useTypedSelector(
        (searchState) => searchState.searchReducer,
    );
    const {
        getResult,
        requestErrorText,
        isRequestFatal,
        isRequestError,
        errorCode,
        isRequestLoading,
    } = useTypedSelector((requestState) => requestState.sendRequestReducer);
    const { paginatedList, currentPage } = useTypedSelector(
        (paginateState) => paginateState.paginationReducer,
    );
    const {
        isFiltered, filteredList, activeFilter, allFilters,
    } = useTypedSelector((filterState) => filterState.filterReducer);
    const {
        sendGet,
        saveTableContent,
        turnOffFilter,
        turnOnFilter,
        changePaginatedList,
        calcListAmount,
    } = useActions();

    // Get content for table.
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
        sendGet(url, headers);
    }, []);

    // Save content from get-request.
    useEffect(() => {
        changePaginatedList(getResult);
        saveTableContent(getResult);
    }, [getResult]);

    // Calculate showing list.
    useEffect(() => {
        if (isFiltered) {
            changePaginatedList(filteredList);
            calcListAmount(filteredList);
        } else if (searchingItem.length !== 0) {
            changePaginatedList(searchList);
            calcListAmount(searchList);
        } else {
            changePaginatedList(content);
            calcListAmount(content);
        }
    }, [filteredList, currentPage, searchingItem, content]);

    // If turned on filtering and searching, or only filtering.
    useEffect(() => {
        if (isFiltered) {
            searchingModeVerify(activeFilter);
        }
    }, [searchingItem]);

    const searchingModeVerify = (element: string) => {
        if (searchingItem.length !== 0) {
            turnOnFilter(element, searchList);
        } else turnOnFilter(element, content);
    };

    const filtering = (event: EventTarget) => {
        const elem = event as HTMLElement;
        if (activeFilter === elem.dataset.filterby) {
            turnOffFilter();
        } else if (elem.dataset.filterby !== undefined) {
            searchingModeVerify(elem.dataset.filterby);
        }
    };

    if (isRequestLoading || isRequestFatal || isRequestError) {
        return (
            <div className="App">
                {isRequestLoading && <LoadingSpinner />}
                {isRequestError && (
                    <p>{`${requestErrorText} Error code: ${errorCode}`}</p>
                )}
                {isRequestFatal && <p>{requestErrorText}</p>}
            </div>
        );
    } else {
        return (
            <div className="App">
                <Search data={content} />
                <Table>
                    <TableHead
                        filtering={filtering}
                        allFilters={allFilters}
                        activeFilter={activeFilter}
                    />
                    <TableBody paginatedContent={paginatedList} />
                </Table>
                <Pagination />
            </div>
        );
    }
}

export default App;
