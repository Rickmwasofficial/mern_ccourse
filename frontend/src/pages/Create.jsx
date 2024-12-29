import { HStack, Flex, Input, Stack } from '@chakra-ui/react'
import useStore from "../store/Store";
import { Field } from '@/components/ui/field'
import { Button } from '@/components/ui/button'
import { MdOutlineClear } from "react-icons/md";
import { BsSave } from "react-icons/bs";
import { useState } from 'react'
import { Toaster, toaster } from '@/components/ui/toaster'


const Create = () => {
    const [item, setItem] = useState({
        name: '',
        price: '',
        image: ''
    })
    const { saveItem } = useStore()

    function clearForm() {
        setItem({
            name: '',
            price: '',
            image: ''
        })
        toaster.create({
            max: 3,
            placement: 'bottom-end',
            description: "Form Cleared",
            type: "info",
        })
    }

    const handleSubmit = async () => {
        if (!item.name || !item.image || !item.price) {
            toaster.create({
                max: 3,
                placement: 'bottom-end',
                description: "Please fill in all fields",
                type: 'warning',
            })
        } else {
            let res = await saveItem(item)
            toaster.create({
                max: 3,
                placement: 'bottom-end',
                description: res.success ? 'Saved Item Successfully' : 'Error saving item',
                type: res.success ? 'success' : 'warning',
            })
        }
    }

    return (
        <Flex as='div' display='flex' justify='center' w='100%' flex='1' align='center' p='2'>
            <Stack gap='6' minW='xl' css={{ "--field-label-width": '96px' }} borderWidth='1px' borderColor='teal' p={'40px'}>
                <Field orientation='vertical' label='name' required>
                    <Input placeholder='Item name' value={item.name} onChange={(e) => setItem((prevValue) => ({...prevValue, name : e.target.value}))} />
                </Field>
                <Field orientation='vertical' label='Price' required>
                    <Input placeholder='Item Price' value={item.price} onChange={(e) => setItem((prevValue) => ({...prevValue, price : e.target.value}))} />
                </Field>
                <Field orientation='vertical' label='Image' required>
                    <Input placeholder='Image Link' value={item.image} onChange={(e) => setItem((prevValue) => ({...prevValue, image : e.target.value}))} />
                </Field>
                <HStack gap='12' mx='auto'>
                    <Button colorPalette="green" variant="subtle" onClick={handleSubmit}>
                        <BsSave /> Save new Item
                    </Button>
                    <Button colorPalette="red" variant="outline" onClick={clearForm}>
                        Clear Form <MdOutlineClear />
                    </Button>
                </HStack>
            </Stack>
            <Toaster />
        </Flex>
    )
}

export default Create;

