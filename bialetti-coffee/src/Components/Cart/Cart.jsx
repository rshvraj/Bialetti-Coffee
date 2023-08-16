import { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Divider,
  Card,
  Stack,
  CardBody,
  Text,
  CardFooter,
  Image,
  IconButton,
  Center,
  Button
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons'; // Import the plus sign icon

const Cart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the provided API
    fetch('https://bialetti-coffee.onrender.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Display only the first 3 products
  const displayedProducts = products.slice(0, 3);

  return (
    <Flex h="100vh">
      {/* Left half */}
      <Box w="50%" bg="gray.800" color="white" p={8}>
        {/* Your content for the left side */}
        <Heading as="h4" size="md">
          You may also like
        </Heading>
        <Divider mb={4} mt={3} />

        {displayedProducts.map((product) => (
          <Card
            bg="gray.800"
            key={product.id}
            direction={{ base: 'column', sm: 'row' }}
            overflow="hidden"
            variant="outline"
            mb={4}
          >
            <Image
              objectFit="cover"
              maxW={{ base: '100%', sm: '200px' }}
              src={product.img}
              alt={product.name}
            />

            <Stack>
              <CardBody>
                <Heading size="md" color="white">
                  {product.title}
                </Heading>
                <Text py="2" color="white">
                  {product.price}
                </Text>
              </CardBody>

              <CardFooter justifyContent="center">
                {/* Center-align the icon button */}
                <IconButton
                  aria-label="Add to cart"
                  variant="solid"
                  colorScheme="red"
                  icon={<AddIcon />}
                />
              </CardFooter>
            </Stack>
          </Card>
        ))}
      </Box>

      {/* Right half */}
      <Box w="50%" p={8}>
        <Center>
          <Heading as="h1" size="lg" mb={4}>
            My Cart (2)
          </Heading>
        </Center>

        <Divider mb={4} />
        <Heading as="h2" size="md" mb={3}>
          Your Order Qualifies as free shipping
        </Heading>

        {/* Right side content */}
        <Button
          w="100%"
          size="lg"
          colorScheme="gray"
          bg="gray.800"
          color="white"
        >
          Checkout
        </Button>
      </Box>
    </Flex>
  );
};

export default Cart;
