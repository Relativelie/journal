import { Search } from '../../../../src/components/search/Search';
import { render } from '../../../testsSetup/test-utils';
import { data } from '../../../testValues/data';

describe('Search component', () => {
    test('snapshot - Search component', () => {
        const tree = render(<Search data={data} />);
        expect(tree).toMatchSnapshot();
    });
});
