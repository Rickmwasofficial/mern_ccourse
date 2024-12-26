import { Button, Stack } from '@chakra-ui/react'

function App() {
  return (
    <Stack spacing={4} direction='row' align='center'>
      <Button 
        colorScheme='teal' 
        size='md'
        _hover={{ bg: 'teal.600' }}
      >
        Primary Button
      </Button>

      <Button
        variant='outline'
        colorScheme='purple'
        size='md'
        _hover={{ bg: 'purple.50' }}
      >
        Secondary Button
      </Button>
    </Stack>
  )
}

export default App