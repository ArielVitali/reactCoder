const Button = ({ texto, conditional, setContador, contador }) => {
  return (
    <button
      onClick={
        texto === "Sumar"
          ? () => setContador(contador + 1)
          : () => setContador(contador - 1)
      }
      style={{ color: conditional ? "red" : "green" }}
    >
      {texto}
    </button>
  );
};

export default Button;
