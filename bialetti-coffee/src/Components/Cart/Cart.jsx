import { Box, Center, Flex, Heading, Divider, Image, Button ,Card,Stack,CardBody,Text,CardFooter} from '@chakra-ui/react';

const Cart = () => {
    
  return (
    <Flex h="100vh">
      {/* Left half */}
      <Box w="50%" bg="gray.800" color="white" p={8}>
        {/* Your content for the left side */}
      </Box>

      {/* Right half */}
      <Box w="50%" p={8}>
        <Center>
          <Heading as="h1" size="lg" mb={4}>
            My Cart (2)
          </Heading>
        </Center>

        <Divider mb={4} />
        <Heading as="h2" size="md" mb={3} >
          Your Order Qualifies as free shipping
          </Heading>

        {/* Card component */}
        <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>The perfect latte</Heading>


      <Text py='2'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text>
    </CardBody> 

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Buy Latte
      </Button>
    </CardFooter>
  </Stack>
</Card>
        
        {/* Add more card components for other products */}
      </Box>
    </Flex>
  );
};

export default Cart;
