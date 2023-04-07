
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import './UserWidget.scss'

const UserWidget = () => {

    
    
    return (

        <Link to="/login" className="user-widget">
            <FaUser/>
        </Link>
    )
}

export default UserWidget