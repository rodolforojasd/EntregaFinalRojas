import Item from "../Item/Item"
import AdminItem from "../"
import { useParams } from 'react-router-dom'

const { page } = useParams()

const ItemList = ( {items} ) => {

    return (
        <div>
            <h2>Productos</h2>
            <hr/>
            
            <div className='row my-5'>

            { page === "admin"
             ? items.map((producto) => <AdminItem key={producto.id} item={producto}/>) 
             : items.map((producto) => <Item key={producto.id} item={producto}/>) 
             }
            </div>
        </div>
    )
}

export default ItemList