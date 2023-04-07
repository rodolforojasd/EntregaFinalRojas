import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'



const UserLoggedWidget = () =>{

    const { user, logout } = useContext(LoginContext)

    return(
        <span>
            {

            user.admin
            ? <Link to="/admin"><h6>Bienvenido, admin !</h6> </Link>
            : <h6>Bienvenido {user.email}</h6>

            }
            <button className='btn btn-danger' onClick={logout}>Logout</button> 
        </span>
        
        
        
    )


}

export default UserLoggedWidget

