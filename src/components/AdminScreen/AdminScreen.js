import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../../context/LoginContext'
import { collection, getDocs, query, where, limit } from 'firebase/firestore'
import './AdminScreen.scss'

const AdminScreen = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    
    const productosRef = collection(db, "products")
    
    useEffect(() => {
        setLoading(true)
        
        // 1- referencia (sync)
        const productsRef = collection(db, "products")
        const q = categoryId 
                    ? query(productsRef, where("category", "==", categoryId))
                    : productsRef
        // 2- pedir esa refencia (async)
        getDocs(q)
            .then((res) => {
                const docs = res.docs.map((doc) => {
                    return {...doc.data(), id: doc.id}
                }) 
                setProducts(docs)
            })
            .finally(() => {
                setLoading(false)
            })
        
    }, [categoryId])


    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login(values)
    }

    return (
        <div className="contenedor">
            <div id="admin_inventory_view" onClick="" className='div_button'>
                {loading 
                    ? <h2>Cargando...</h2>
                    : <ItemList items={products}/>
                }
            </div>           
        </div>
    )
        

        
    
}

export default AdminScreen
    