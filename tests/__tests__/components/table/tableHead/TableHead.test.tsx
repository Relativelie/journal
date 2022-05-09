import { fireEvent, screen } from '@testing-library/react';
import { TableHead } from '../../../../../src/components/table/tableHead/TableHead';
import { render } from '../../../../testsSetup/test-utils';

describe('Table head component', () => {
    test('click to head(table filtering)', () => {
        const filtering: Function = jest.fn();
        render(
            <table>
                <TableHead
                    filtering={filtering}
                    allFilters={[{ id: 1, attributeName: 'id', headName: 'ID' }]}
                />
            </table>,
        );
        const id = screen.getByTestId(/table head/i);
        fireEvent.click(id);
        expect(filtering).toHaveBeenCalledTimes(1);
    });
});
