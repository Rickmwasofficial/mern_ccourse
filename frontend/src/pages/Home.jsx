import useStore from "../store/Store";
import { Grid, Flex, Text } from '@chakra-ui/react'
import ProductCard from '../components/Card'
import { Link } from 'react-router'
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
        <>
            {Array.isArray(products) && products.length > 0 ? (
                <Grid templateColumns="repeat(3, 1fr)" flex="1" gap="6" my="40px">
                    {fetchedProducts}
                </Grid>
            ) : (
                <Flex
                display="flex"
                justify="center"
                w="100%"
                h="79vh"
                align="center"
                gap='2'
                p="2"
                top="0"
                position="sticky"
                bg="white"
                zIndex={1}
                borderBottomWidth="1px"
                borderBottomColor="teal">
                    There are no items available. 
                    <Link to="/create">
                        <Text color="blue.500"> Create new item</Text>
                    </Link>
                </Flex>
            )}
        </>
    );
}

export default Home;