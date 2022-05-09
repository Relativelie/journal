import { fireEvent, screen } from '@testing-library/react';
import { render } from '../../../testsSetup/test-utils';
import { Search } from '../../../../src/components/search/Search';
import { data } from '../../../testValues/data';

describe('Search component', () => {
    test('snapshot - Search component', () => {
        const tree = render(<Search data={data} />);
        expect(tree).toMatchSnapshot();
    });

    test('type some value', () => {
        render(<Search data={data} />);
        const inputField = screen.getByPlaceholderText(/поиск/i);
        fireEvent.change(inputField, { target: { value: 'Harribo' } });
        fireEvent.focusOut(inputField);
        expect(inputField).toHaveValue('Harribo');
    });
});
