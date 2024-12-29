import { Button, Card, Image, Text } from "@chakra-ui/react"

const ProductCard = (props) => {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image
        src={props.image}
        alt="Green double couch with wooden legs"
      />
      <Card.Body gap="2">
        <Card.Title>{props.name}</Card.Title>
        <Card.Description>
          This sofa is perfect for modern tropical spaces, baroque inspired
          spaces.
        </Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
        {props.price}
        </Text>
      </Card.Body>
      <Card.Footer gap="2">
        <Button variant="solid">Buy now</Button>
        <Button variant="ghost">Add to cart</Button>
      </Card.Footer>
    </Card.Root>
  )
}

export default ProductCard;
