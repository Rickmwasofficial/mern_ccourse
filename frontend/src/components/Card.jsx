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
    <Card.Root maxW="sm" overflow="hidden">
      <Image
        src={props.image}
        alt="Green double couch with wooden legs"
      />
      <Card.Body gap="2">
        <Card.Title>{props.name}</Card.Title>
        
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
        {props.price}
        </Text>
      </Card.Body>
      <Card.Footer gap="2">
        <Button colorPalette="green" variant="subtle">
            <FaRegEdit />
        </Button>
        <Button colorPalette="red" variant="outline" onClick={() => handleDelete(props._id)}>
            <MdDeleteForever />
        </Button>
      </Card.Footer>
      <Toaster />
    </Card.Root>
  )
}

export default ProductCard;
