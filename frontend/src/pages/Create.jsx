import { HStack, Flex, Input, Stack } from '@chakra-ui/react'
import { Field } from '@/components/ui/field'
import { Button } from '@/components/ui/button'
import { MdOutlineClear } from "react-icons/md";
import { BsSave } from "react-icons/bs";


const Create = () => {
    return (
        <Flex as='div' display='flex' justify='center' w='100%' flex='1' align='center' p='2'>
            <Stack gap='6' minW='xl' css={{ "--field-label-width": '96px' }} borderWidth='1px' borderColor='teal' p={'40px'}>
                <Field orientation='vertical' label='Name' required>
                    <Input placeholder='Item Name' />
                </Field>
                <Field orientation='vertical' label='Price' required>
                    <Input placeholder='Item Price' />
                </Field>
                <Field orientation='vertical' label='Image' required>
                    <Input placeholder='Image Link' />
                </Field>
                <HStack gap='12' mx='auto'>
                    <Button colorPalette="green" variant="subtle">
                        <BsSave /> Save New Item
                    </Button>
                    <Button colorPalette="red" variant="outline">
                        Clear Form <MdOutlineClear />
                    </Button>
                </HStack>
            </Stack>
            
        </Flex>
    )
}

export default Create;

