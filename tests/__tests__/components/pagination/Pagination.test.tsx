import { fireEvent, screen } from '@testing-library/dom';
import { Pagination } from '../../../../src/components/pagination/Pagination';
import { render } from '../../../testsSetup/test-utils';

describe('Pagination component', () => {
    test('snapshot - Pagination component', () => {
        const tree = render(<Pagination />);
        expect(tree).toMatchSnapshot();
    });

    test('snapshot - click on next and prev', () => {
        render(<Pagination />);
        const pagination = screen.getByText(/1/i);
        const className = 'pagination__number pagination__number_isActive';
        expect(pagination).toHaveClass(className);
        const next = screen.getByText(/вперед/i);
        fireEvent.click(next);
        const prev = screen.getByText(/назад/i);
        fireEvent.click(prev);
    });
});
