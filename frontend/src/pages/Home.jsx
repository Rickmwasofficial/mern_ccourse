import useStore from "../store/Store";
import { Grid } from '@chakra-ui/react'
import ProductCard from '../components/Card'
import { useEffect } from 'react'

const Home = () => {
    const { fetchProducts, products } = useStore()
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts])

    let fetchedProducts = products.map((product => {

        return (<ProductCard key={product._id} {...product} />)
    }))
    return (
        <Grid templateColumns="repeat(3, 1fr)" flex='1' gap='6'>
            {fetchedProducts}
        </Grid>
    )
}

export default Home;