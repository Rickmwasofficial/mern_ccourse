import { Box, Text, Flex } from '@chakra-ui/react'
import { Button } from '@/components/ui/button'
import { CiSquarePlus } from "react-icons/ci"
import { FiSun } from "react-icons/fi"
import { useState } from 'react'
import { BsFillCloudMoonFill } from "react-icons/bs"
import { Link } from 'react-router'
import { toaster } from '@/components/ui/toaster'


const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false)

    function toggleDarkMode() {
        toaster.create({
            max: 3,
            overlap: true,
            placement: 'bottom-end',
            description: darkMode ? 'Switched to dark mode' : 'Switched to light mode',
            type: "success",
        })
        setDarkMode(prevMode => !prevMode)
    }
    return (
        <Flex as='nav' display='flex' justify='space-between' w='100%' h='auto' align='center' p='2' top='0' position='sticky' bg="white" zIndex={1} borderBottomWidth={'1px'} borderBottomColor='teal' >
            <Link to='/'><Text>MAVERICK ITEMS</Text></Link>
            <Flex justify='space-around' gap='4'>
                <Link to='/create'>
                    <Button colorPallette='teal' variant='outline' size='md' >
                        <CiSquarePlus />
                    </Button>
                </Link>
                
                <Button colorPallette='teal' variant='outline' onClick={toggleDarkMode} size='md' >
                    {darkMode ? <FiSun /> : <BsFillCloudMoonFill />}
                </Button>
            </Flex>
        </Flex>
    )
}

export default Navbar;