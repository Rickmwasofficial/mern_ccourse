import { Button, Card, Image, Text } from "@chakra-ui/react"
import useStore from "../store/Store";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { Toaster, toaster } from '@/components/ui/toaster'

const ProductCard = (props) => {  
  const { deleteItem } = useStore()
  const handleDelete = async (id) => {
    let res = await deleteItem(id)
      toaster.create({
          max: 3,
          placement: 'bottom-end',
          description: res.message,
          type: res.success ? 'success' : 'warning',
      })
  }
  return (
    <Card.Root maxW="sm" size="sm" maxHeight="sm" overflow="hidden" borderWidth="1px" borderRadius="md">
      <Image
        src={props.image}
        alt="Green double couch with wooden legs"
        width="100%" // Set the width to 100% of the card
        height="200px" // Set a fixed height for the image
        objectFit="cover"
      />
      <Card.Body gap="2">
        <Card.Title>{props.name}</Card.Title>
        
        <Text textStyle="xl" fontWeight="medium" letterSpacing="tight" mt="1">
        $ {props.price}
        </Text>

        <Button colorPalette="green" variant="subtle">
            <FaRegEdit /> Edit Item
        </Button>
        <Button colorPalette="red" variant="outline" onClick={() => handleDelete(props._id)}>
            <MdDeleteForever /> Delete Item
        </Button>
      </Card.Body>
      <Toaster />
    </Card.Root>
  )
}

export default ProductCard;
