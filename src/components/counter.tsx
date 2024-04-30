import { useReducer } from 'react';
import {
  reduxToolKitCounterReducer,
  classicReducer,
  decrement,
  increment,
  reset,
} from '../features/counter-reducer';

const Counter = () => {
  // point made, reducers made via reduxToolkit's createReducer/createAction
  // are in the end exactly same as the ol' reducer you've been using since Flatiron
  // one could say, the syntax is cleaner with reduxToolkit?
  const [state, dispatch] = useReducer(reduxToolKitCounterReducer, {
    count: 0,
  }); // react makes you put in a default initial state here unfortunately
  // const [state, dispatch] = useReducer(classicReducer, { count: 0 }); // react makes you put in a default initial state here unfortunately

  return (
    <section className="flex w-2/3 flex-col items-center gap-8 border-4 border-primary-500 bg-white p-8 shadow-lg">
      <h1>Days Since the Last Accident</h1>
      <p className="text-6xl">{state.count}</p>
      <div className="flex gap-2">
        <button onClick={() => dispatch(decrement(1))}>➖ Decrement</button>
        <button onClick={() => dispatch(reset())}>🔁 Reset</button>
        <button onClick={() => dispatch(increment(1))}>➕ Increment</button>
      </div>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="number" value={0} onChange={() => {}} />
          <button type="submit">Update Counter</button>
        </form>
      </div>
    </section>
  );
};

export default Counter;
