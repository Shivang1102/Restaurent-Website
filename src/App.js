import Header from "./Components/Layout/Header";
import Meals from './Components/Meals/Meals'
import Cart from "./Components/Cart/Cart";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Cart/>
      <Header></Header>
    <main>
      <Meals/>
    </main>

    </Fragment>
  );
}

export default App;
