import { useState } from 'react';
import { randint } from 'workshops-de_shared';
import { CounterHook } from './CounterHook';

export const useCounter: CounterHook = (initialValue) => {
  const [count, setCount] = useState(initialValue);

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);
  const resetCount = () => setCount(initialValue);

  return { count, incrementCount, decrementCount, resetCount };
};

export const useCrazyCounter: CounterHook = (initialValue) => {
  const [count, setCount] = useState(initialValue);

  const incrementCount = () => setCount(count + randint(1, 5));
  const decrementCount = () => setCount(count - randint(1, 5));
  const resetCount = () => setCount(randint(-10, 10));

  return { count, incrementCount, decrementCount, resetCount };
};
