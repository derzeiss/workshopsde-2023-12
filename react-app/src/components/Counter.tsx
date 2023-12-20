import { useRef } from 'react';
import { CounterHook } from '../domain/counter/CounterHook';

interface CounterProps {
  initialValue?: number;
  useCounter: CounterHook;
}

export const Counter = ({ initialValue = 0, useCounter }: CounterProps) => {
  const { count, incrementCount, decrementCount, resetCount } = useCounter(initialValue);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="counter">
      <button className="secondary" onClick={decrementCount}>
        -
      </button>
      <h2>{count}</h2>
      <button className="secondary" onClick={incrementCount}>
        +
      </button>
      <button className="tertiary" onClick={resetCount}>
        Reset
      </button>

      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          console.log('submit val', inputRef.current?.value);
        }}
      >
        <input type="text" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
