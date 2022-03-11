import { useCallback, useState, useMemo } from "react";
import Title from "./components/Title.jsx";
import MyForm from "./components/Forms/MyForm.jsx";
import MyList from "./components/Lists/MyList.jsx";

function App() {
  const [valores, setValores] = useState([]);
  const handleSubmit = useCallback((values) => {
    setValores((data) => [
      ...data,
      values,
    ]);
  }, []);

  console.time("useMemo");

  const valor = 5000000;

  const resultado = useMemo(() => operacionPesada(valor), [valor]);

  console.timeEnd("useMemo");

  return (
    <div>
      <Title>Mi título</Title>
      <MyForm onSubmit={handleSubmit} />
      <MyList data={valores} />
    </div>
  );
}

export default App;

const operacionPesada = (valor) => {
  let total = 0;

  for (let i = 0; i < valor; i++) {
    total *= valor;
  }

  return total;
};
