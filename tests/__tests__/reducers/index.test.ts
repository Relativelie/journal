import { reducers } from '../../../src/store/reducers';
import { filterReducer } from '../../../src/store/reducers/filterReducer';
import { paginationReducer } from '../../../src/store/reducers/paginationReducer';
import { searchReducer } from '../../../src/store/reducers/searchReducer';
import { sendRequestReducer } from '../../../src/store/reducers/sendRequestReducer';
import { tableReducer } from '../../../src/store/reducers/tableReducer';

test('necessary reducers ​​are prepared', () => {
    expect(reducers.filterReducer).toEqual(filterReducer);
    expect(reducers.sendRequestReducer).toEqual(sendRequestReducer);
    expect(reducers.paginationReducer).toEqual(paginationReducer);
    expect(reducers.searchReducer).toEqual(searchReducer);
    expect(reducers.tableReducer).toEqual(tableReducer);
});
