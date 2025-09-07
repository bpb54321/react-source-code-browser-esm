import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((count) => {
      return count + 1;
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
}
