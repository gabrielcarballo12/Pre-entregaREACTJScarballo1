
import { NavBar } from "./components/NavBar";
import {  ItemListContainer } from "./components/ItemListContainer";


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer gretting="Hola Mundo!" />
    </>
  );
}

export default App;