import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState<number>(() => {
    const saved = localStorage.getItem("clickCount");
    return saved ? parseInt(saved) : 0;
  });

  const handleClick = () => {if (count < 100) setCount(count + 1)};

  const handleDecrease = () =>{
   if (count > 0) setCount(count - 1) 
  }
  const reset = () => setCount(0);

  // كل ما تغيّر count، خزّنه
  useEffect(() => {
    localStorage.setItem("clickCount", count.toString());
  }, [count]);

  return (
    <div className="container">
      <h1>عداد النقر</h1>
      <h2>{count}</h2>
      <button onClick={handleClick}>
        زيادة
      </button>
            <button onClick={handleDecrease}>
        انقاص
      </button>
      <button onClick={reset}>تصفير</button>

      {count === 0 && <p> (0) لا يمكن ان يكون العدد اقل من </p>}
      {count === 100 && <p> (100) وصلت الى الحد الاقصى</p>}
    </div>
  );
}

export default App;