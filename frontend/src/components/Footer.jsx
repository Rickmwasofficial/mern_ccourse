import { Text, Flex } from '@chakra-ui/react'
import { Button } from '@/components/ui/button'
import { RiTwitterXLine } from "react-icons/ri";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router'

const Footer = () => {
  return (
    <Flex as='nav' display='flex' justify='space-between' w='100%' h='auto' align='center' p='2' borderTopWidth={'1px'} borderTopColor='teal' position="relative" top='99vh' >
      <Link to='/'><Text>MAVERICK ITEMS</Text></Link>
      <Text>By Rickmwasofficial</Text>
      <Flex justify='space-around' gap='4'>
          <Link to='/create'>
              <Button colorPallette='teal' variant='outline' size='md' >
                <FaLinkedin />
              </Button>
          </Link>
          
          <Button colorPallette='teal' variant='outline' size='md' >
            <FaSquareGithub />
          </Button>

          <Button colorPallette='teal' variant='outline' size='md' >
            <RiTwitterXLine />
          </Button>
      </Flex>
    </Flex>
  )
}

export default Footer;