import { CounterHook } from "../domain/counter/CounterHook";

interface CounterProps {
  initialValue?: number;
  useCounter: CounterHook;
}

export const Counter = ({ initialValue = 0, useCounter }: CounterProps) => {
  const { count, incrementCount, decrementCount, resetCount } =
    useCounter(initialValue);
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
    </div>
  );
};
