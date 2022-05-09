import { Table } from '../../../../src/components/table/Table';
import { TableBody } from '../../../../src/components/table/tableBody/TableBody';
import { TableHead } from '../../../../src/components/table/tableHead/TableHead';
import { render } from '../../../testsSetup/test-utils';
import { data } from '../../../testValues/data';

describe('Table component', () => {
    test('snapshot - table, tableHead, tableBody component', () => {
        const filtering: Function = jest.fn();
        const tree = render(
            <Table>
                <TableHead
                    filtering={filtering}
                    allFilters={[{ id: 1, attributeName: 'id', headName: 'ID' }]}
                    activeFilter="id"
                />
                <TableBody paginatedContent={data} />
            </Table>,
        );
        expect(tree).toMatchSnapshot();
    });
});
