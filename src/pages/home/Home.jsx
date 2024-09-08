import Navbar from "../../components/Navbar"
import Card from "../../components/Card"
import { useEffect, useState } from "react"
import axios from "axios";
import Footer from "../../components/footer";
function Home() {
    const [products, setProducts] = useState([])
    const fetchProducts = async () => {
        const response = await axios.get('https://66dc924e47d749b72acbf3da.mockapi.io/Products')
        if (response.status === 200) {
            setProducts(response.data)
        }
    }
    useEffect(
        () => {
            console.log("haha inside useEffect")
            fetchProducts()
        }, [])
    console.log(products)
    return (
        <>
            <Navbar />
            <div className="flex space-x-5 mt-4 ml-4 flex-wrap">
                {/* for loop */}
                {
                    products.map((product) => {
                        return (
                            <Card product={product} />
                        )
                    })
                }
            </div>
            <Footer/>
        </>
    )
}
export default Home