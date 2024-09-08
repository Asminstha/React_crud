import Navbar from "../../components/Navbar"
import Form from "../../components/Form"
import {useState,useEffect} from "react"
import {useParams} from "react-router-dom"
import Footer from "../../components/footer"
function EditProduct(){

    const {id}=useParams()
    const [product,setProduct]=useState({})
 
    return(
<>
<Navbar/>
<Form type='edit' id={id}/>
<Footer/>
</>
    )
}
export default EditProduct