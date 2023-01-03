import { useState } from "react";
import Button from "./components/Button/Button";
import { chakra } from "@chakra-ui/react";

function App() {
  const [contador, setContador] = useState(0);

  return (
    <div className="App">
      <Button
        texto={"Sumar"}
        conditional={true}
        setContador={setContador}
        contador={contador}
      />
      <Button texto={"Restar"} setContador={setContador} contador={contador} />
      <h2>{contador}</h2>
    </div>
  );
}

export default App;
