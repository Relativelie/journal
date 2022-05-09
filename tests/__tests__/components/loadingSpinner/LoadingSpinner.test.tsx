import { LoadingSpinner } from '../../../../src/components/loadingSpinner/LoadingSpinner';
import { render } from '../../../testsSetup/test-utils';

describe('Loading spinner component', () => {
    test('snapshot - Loading spinner component', () => {
        const tree = render(<LoadingSpinner />);
        expect(tree).toMatchSnapshot();
    });
});
