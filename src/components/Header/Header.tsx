import { FC } from 'react';
import logo from '../../logo.svg';

type TProps = {
    onRunTest: () => void,
    disableRunButton: boolean,
    onClearButton: () => void,
    disableClearButton: boolean,
    notStarted: number,
    passed: number,
    failed: number,
}

const Header: FC<TProps> = ({
    onRunTest,
    disableRunButton,
    onClearButton,
    disableClearButton,
    notStarted,
    passed,
    failed
}) => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <button
                onClick={onRunTest}
                disabled={disableRunButton}
            >
                RUN tests
            </button>
            <button
                onClick={onClearButton}
                disabled={disableClearButton}
            >
                CLEAR tests
            </button>

            <h4>Not Started: {notStarted}</h4>
            <h4>Passed: {passed}</h4>
            <h4>Failed: {failed}</h4>
            <h6>{notStarted === 0 && 'Finished 🎉'}</h6>
        </header>
    )
}

export default Header;