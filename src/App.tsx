import React, { useReducer, useCallback } from 'react';
import TestCard from './components/TestCard';
import Header from './components/Header';
import { testReducer, ActionTypes } from './reducer';
import { initialState } from './initialState';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(testReducer, initialState);

  const handleRunTests = () => dispatch({
    type: ActionTypes.RUN_TESTS,
    payload: {
      onUpdate: () => dispatch({ type: ActionTypes.UPDATE_TEST })
    }
  });

  const handleClearTetst = () => dispatch({
    type: ActionTypes.CLEAR_TESTS,
  })

  return (
    <div className="App">
      <Header
        onRunTest={handleRunTests}
        disableRunButton={state.isRunning}
        onClearButton={handleClearTetst}
        disableClearButton={!!state.notStarted}
        notStarted={state.notStarted}
        passed={state.passed}
        failed={state.failed}
      />

      <section>
        {initialState.tests.map(test => {
          const { description, running, passed } = state.tests.find(el => el.id === test.id) ?? test;

          return (
            <TestCard
              key={test.id}
              description={description}
              running={running}
              passed={passed}
            />
          )
        })}
      </section>
    </div>
  );
}

export default App;
