import { saveTableContent } from '../../../src/store/actions/tableActions';
import { TableActionTypes } from '../../../src/types/tableTypes';

describe('table actions', () => {
    test('save table content', () => {
        expect(saveTableContent([{ id: 8 }])).toEqual({
            type: TableActionTypes.SAVE_TABLE_CONTENT,
            value: [{ id: 8 }],
        });
    });
});
