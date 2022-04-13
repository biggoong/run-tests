import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('test component Header', () => {
    const mockProps = {
        onRunTest: jest.fn(),
        disableRunButton: false,
        onClearButton: jest.fn(),
        disableClearButton: true,
        notStarted: 4,
        passed: 0,
        failed: 0
    }

    it('with the first render', () => {
        render(<Header {...mockProps} />);
        const textElement = screen.getAllByText(/RUN tests/gi)[0];
        expect(textElement).toBeInTheDocument();
    });

    it('render finned all tests', () => {
        render(<Header {...mockProps} notStarted={0} />);
        const textElement = screen.getAllByText(/Finished/gi)[0];
        expect(textElement).toBeInTheDocument();
    });

})
