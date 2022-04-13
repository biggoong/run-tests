import type { TTest, TState } from '../initialState';
import { initialState } from '../initialState';

export enum ActionTypes {
    RUN_TESTS = 'RUN_TESTS',
    UPDATE_TEST = 'UPDATE_TEST',
    CLEAR_TESTS = 'CLEAR_TESTS',
}

type TAction = {
    type: keyof typeof ActionTypes;
    payload?: {
        onUpdate: () => void,
    }
}

export function testReducer(state: TState, action: TAction): TState {
    switch (action.type) {
        // Lanch all the tests
        case ActionTypes.RUN_TESTS:
            const newTests: TTest[] = state.tests.map((test) => {
                // const newTest = Object.assign({}, test);
                const newTest = JSON.parse(JSON.stringify(test));
                newTest.running = true;

                const handleCallback = (passed: boolean) => {
                    newTest.passed = passed;
                    newTest.running = false;

                    action.payload?.onUpdate();
                }

                test.run(handleCallback);

                return newTest;
            });

            return { ...state, isRunning: true, tests: newTests };

        // Update the state, counting how many passed and failed
        case ActionTypes.UPDATE_TEST:
            let count = state.notStarted;
            const passed = state.tests.filter(test => test.passed).length;
            const failed = state.tests.filter(test => test.passed === false).length;

            if (count) {
                count = count - 1;
            }

            return { ...state, notStarted: count, passed, failed };

        // Clear result of tests, return tests to the initial
        case ActionTypes.CLEAR_TESTS:
            return initialState;

        default:
            throw new Error();
    }
}