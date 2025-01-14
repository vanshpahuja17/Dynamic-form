import logo from "./logo.svg";
import "./App.css";
import ShoppingCart from "./ShoppingCart";
import { ShoppingCartProvider } from "./ShoppingCartContext";
import DropdownForm from "./DropdownForm";
import Product from "./ProductCRUD";
import { ItenaryProvider } from "./ProductCONTEXT";
import TodoForm from "./ToDO";

function App() {
  return (
    <div className="App">
      <ShoppingCartProvider>
        <TodoForm/>
        <ShoppingCart />
        <DropdownForm/>
        
      </ShoppingCartProvider>

        <ItenaryProvider>
          <Product/>
        </ItenaryProvider>
    </div>
  );
}

export default App;
