import { TableState } from '../../../src/types/tableTypes';
import { tableReducer } from '../../../src/store/reducers/tableReducer';
import { saveTableContent } from '../../../src/store/actions/tableActions';
import { data } from '../../testValues/data';

let state: TableState;

beforeEach(() => {
    state = {
        content: [],
    };
});

describe('table reducer', () => {
    test('save table content', () => {
        const newState = tableReducer(
            state,
            saveTableContent(data),
        );
        expect(newState).toStrictEqual({
            ...state,
            content: data,
        });
    });
});
