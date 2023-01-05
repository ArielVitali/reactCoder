import { useEffect } from "react";

function App() {
  useEffect(() => {
    setTimeout(() => {
      alert("holaaa");
    }, 3000);
  }, []);

  return <div className="App">holaa</div>;
}

export default App;
