import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "../../firebase/config"
import AdminItemDetail from "../AdminItemDetail/AdminItemDetail"
import AdminAddItem from "../AdminAddItem/AdminAddItem"
import { doc, getDoc } from "firebase/firestore"


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        // 1.- referencia sync
        const docRef = doc(db, "products", itemId)
        // 2.- llamado async
        getDoc(docRef)
            .then((doc) => {
                console.log(doc.id)
                console.log(doc.data())
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .finally(() => setLoading(false))

    }, [])

    return (
        <div>
            {   item
                loading
                    ? <h2>Cargando...</h2>
                    : <AdminItemDetail item={item}/>
            }
        </div>
    )
}

export default ItemDetailContainer