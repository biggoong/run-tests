import { render, screen } from '@testing-library/react';
import TestCard from './TestCard';

describe('test component TestCard', () => {
    const mockTest = {
        description: 'test des',
        passed: false,
        running: false,
    }

    it('with the first render', () => {
        render(<TestCard {...mockTest} />);
        const textElement = screen.getAllByText(/test des/gi)[0];
        expect(textElement).toBeInTheDocument();
    });

    it('render running test', () => {
        render(<TestCard {...mockTest} running={true} />);
        const textElement = screen.getAllByText(/Running/gi)[0];
        expect(textElement).toBeInTheDocument();
    });

    it('render passed test', () => {
        render(<TestCard {...mockTest} passed={true} />);
        const textElement = screen.getAllByText(/Passed/gi)[0];
        expect(textElement).toBeInTheDocument();
    });
})
