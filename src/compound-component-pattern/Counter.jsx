import { Children, createContext, useContext, useState } from "react";

// 1. Create a Contenxt
const CounterContext = createContext();

// 2. Create Parent Component
function Counter({ children }) {
  const [count, setCount] = useState(0);
  const increase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => c - 1);
  return (
    <CounterContext.Provider value={{ count, increase, decrease }}>
      <span>{children}</span>
    </CounterContext.Provider>
  );
}

// 3. Create child component to implement the common functionality;
const Count = () => {
  const { count } = useContext(CounterContext);
  return <span>{count}</span>;
};
const Label = ({ children }) => {
  return <span>{children}</span>;
};
const Increase = ({ icon }) => {
  const { increase } = useContext(CounterContext);
  return <button onClick={increase}>{icon}</button>;
};
const Decrease = ({ icon }) => {
  const { decrease } = useContext(CounterContext);
  return <button onClick={decrease}>{icon}</button>;
};

// 4. Add child components as properties
Counter.Count = Count;
Counter.Label = Label;
Counter.Increase = Increase;
Counter.Decrease = Decrease;

export default Counter;
