import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState<number>(() => {
    const saved = localStorage.getItem("clickCount");
    return saved ? parseInt(saved) : 0;
  });

  const handleClick = () => setCount(count + 1);
  const reset = () => setCount(0);

  // كل ما تغيّر count، خزّنه
  useEffect(() => {
    localStorage.setItem("clickCount", count.toString());
  }, [count]);

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