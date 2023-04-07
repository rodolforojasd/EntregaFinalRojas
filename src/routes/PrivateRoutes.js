import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { Navbar } from "../components/Navbar/Navbar";
import Nosotros from "../components/Nosotros/Nosotros";
import Contacto from "../components/Contacto/Contacto";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Cart from "../components/Cart/Cart";
import { Routes, Route } from 'react-router-dom'
import Checkout from "../components/Checkout/Checkout";


const PrivateRoutes = () => {

    return (
        <>
            <Navbar />
            {/* RUTAS PRIVADAS */}
            <Routes>
                <Route path="/checkout" element={ <Checkout /> } />
            </Routes>
        </>
    )
}

export default PrivateRoutes