import { Counter } from "../components/Counter";
import { useCrazyCounter } from "../domain/counter/useCounter";

export const CounterScreen = () => {
  return <Counter initialValue={3} useCounter={useCrazyCounter} />;
};
