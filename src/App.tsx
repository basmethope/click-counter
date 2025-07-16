import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => setCount(count + 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>عداد النقر</h1>
      <h2>{count}</h2>
      <button onClick={handleClick} style={{ marginRight: "10px" }}>
        اضغطني!
      </button>
      <button onClick={reset}>إعادة التصفير</button>
    </div>
  );
}

export default App;