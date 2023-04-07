import { CartProvider } from "./context/CartContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginProvider } from "./context/LoginContext";
import AppRouter from "./routes/AppRouter";


function App() {

  return (
    <LoginProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </LoginProvider>
  );
}

export default App;
