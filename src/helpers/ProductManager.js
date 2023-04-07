import { db } from './config.js'
import { addDoc, collection,doc,deleteDoc } from 'firebase/firestore'

const productsRef= collection(db,'products')

class Product {
    constructor(title,description,volumeOrWeight, price,img,stock,category){
 
    this.title= title
    this.description= description
    this.volumeOrWeight= volumeOrWeight
    this.price = price
    this.img = img
    this.stock =stock
    this.category = category
}}

    class ProductManager{
    constructor(ref){
        this.ref = ref 
    }

    addProduct(title,description,volumeOrWeight,price,img,stock,category){
        let product = new Product(title,description,volumeOrWeight,price,img,stock,category)
        addDoc(ref, product)
    }

    updateProductById(id,field,value){

        const ref = doc(db,"products",id);  
        let field = field 
    
        db.collection("products").doc(id).update({  
            [field]:value
        })

    }

   async deleteProductById(id){
        const ref = doc(db,"products",id);  
        await deleteDoc(ref);
    }


}

export default productManager
const productManager = new ProductManager (productsRef)
productManager.addProduct()
productManager.addProduct()
productManager.addProduct()
productManager.addProduct()
productManager.addProduct()
productManager.addProduct()
productManager.addProduct()
productManager.addProduct()
productManager.addProduct()
productManager.addProduct()
productManager.addProduct()
productManager.addProduct()
productManager.addProduct()
productManager.addProduct()
productManager.addProduct()
productManager.addProduct()
productManager.addProduct()
productManager.addProduct()
productManager.addProduct()

