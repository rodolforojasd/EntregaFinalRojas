import LoginScreen from "../components/LoginScreen/LoginScreen";
import { Routes, Route, Navigate } from 'react-router-dom'
import RegisterScreen from "../components/RegisterScreen/RegisterScreen";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { Navbar } from "../components/Navbar/Navbar";
import Nosotros from "../components/Nosotros/Nosotros";
import Contacto from "../components/Contacto/Contacto";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Cart from "../components/Cart/Cart";
import AdminScreen from "../components/AdminScreen/AdminScreen";

const AdminRoutes = () => {

    return (
        <>
            <Navbar />
            {/* RUTAS ADMiN */}
            <Routes>
                <Route path="/login" element={ <LoginScreen /> }/>
                <Route path="/register" element={ <RegisterScreen /> }/>
                <Route path="*" element={ <Navigate to="/login" /> }/>
                <Route path="/" element={ <ItemListContainer /> }/>
                <Route path="/products/:categoryId" element={ <ItemListContainer /> }/>
                <Route path="/detail/:itemId" element={ <ItemDetailContainer /> }/>
                <Route path="/cart" element={ <Cart /> } />
                <Route path="/nosotros" element={ <Nosotros /> } />
                <Route path="/contacto" element={ <Contacto /> } />
                <Route path="*" element={ <Navigate to="/" /> }/>
                <Route path="/admin" element={ <AdminScreen/> } />
                <Route path="/admin/detail/:itemId" element={ <AdminScreen/> } />
            </Routes>
        </>
    ) 
}

export default AdminRoutes