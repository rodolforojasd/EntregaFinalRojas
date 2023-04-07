import { Link } from "react-router-dom"
import { BsFillTrashFill } from 'react-icons/bs'
import{BsFillPencilFill} from 'react-icons/bs'
import {productManager} from '../../helpers/ProductManager'

const AdminItem = ( {item} ) => {

    return (
        <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={item.img} class="img-fluid rounded-start" alt={item.name}/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="">{item.name}</h5>
              <p class="card-text"><strong> Stock: {item.stock}</strong></p>
              <button 
                            onClick={() => productManager.deleteProductById(item.id) } 
                            className="btn btn-danger"
                        >
                            <BsFillTrashFill/>
                </button>
                <Link to={`/admin/detail/${item.id}`} className='btn btn-secondary'>
                    <BsFillPencilFill/>
                </Link>
              <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
            
      
    )
}

export default AdminItem
