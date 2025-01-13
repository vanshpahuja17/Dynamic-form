import logo from "./logo.svg";
import "./App.css";
import ShoppingCart from "./ShoppingCart";
import { ShoppingCartProvider } from "./ShoppingCartContext";
import DropdownForm from "./DropdownForm";

function App() {
  return (
    <div className="App">
      <ShoppingCartProvider>
        <ShoppingCart />
        <DropdownForm/>
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
