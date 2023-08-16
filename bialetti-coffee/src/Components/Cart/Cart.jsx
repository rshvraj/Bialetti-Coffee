import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

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
import { AddIcon } from '@chakra-ui/icons';
import { MinusIcon } from '@chakra-ui/icons';

const Cart = ({ cartItems }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [itemCounts, setItemCounts] = useState({});
  const [subtotal, setSubtotal] = useState();


  useEffect(() => {
    fetch('https://bialetti-coffee.onrender.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        // Initialize cart with the same data for demonstration purposes
        setCart(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const displayedProducts = products.slice(3, 5);
  const displayedCart = cart.slice(0, 2);

  const calculateSubtotal = () => {
    let newSubtotal = 0;
    displayedCart.forEach((cartItem) => {
      const itemPrice = parseFloat(cartItem.price.replace('$', ''));
      const itemCount = itemCounts[cartItem.id] || 1;
      newSubtotal += itemPrice * itemCount;
    });
    return newSubtotal.toFixed(2);
  };
  


  return (
    <Flex h="100vh">
      <Box w="50%" bg="gray.800" color="white" p={8}>
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

      <Box w="50%" p={8}>
        <Center>
          <Heading as="h1" size="lg" mb={4}>
            My Cart
          </Heading>
        </Center>

        <Divider mb={4} />
        <Heading as="h2" size="md" mb={3}>
          Your Order Qualifies as free shipping
        </Heading>

        {displayedCart.map((cartItem) => (
          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow="hidden"
            variant="outline"
            key={cartItem.id}
          >
            <Image
              objectFit="cover"
              maxW={{ base: '100%', sm: '200px' }}
              src={cartItem.img}
            />
            <Stack>
              <CardBody>
                <Heading size="md">{cartItem.title}</Heading>
                <Text py="2">{cartItem.price}</Text>
              </CardBody>
              <CardFooter>
                <Flex alignItems="center">
                  <IconButton
                    aria-label="Decrease"
                    variant="solid"
                    colorScheme="blue"
                    icon={<MinusIcon />}
                    onClick={() => {
                      setItemCounts((prevCounts) => ({
                        ...prevCounts,
                        [cartItem.id]: (prevCounts[cartItem.id] || 1) - 1,
                      }));
                      setSubtotal(calculateSubtotal());

                    }}
                  />
                  <Text mx={2}>{itemCounts[cartItem.id] || 1}</Text>
                  <IconButton
                    aria-label="Increase"
                    variant="solid"
                    colorScheme="blue"
                    icon={<AddIcon />}
                    onClick={() => {
                      setItemCounts((prevCounts) => ({
                        ...prevCounts,
                        [cartItem.id]: (prevCounts[cartItem.id] || 1) + 1,
                      }));
                      setSubtotal(calculateSubtotal());

                    }}
                  />
                </Flex>
              </CardFooter>
            </Stack>
          </Card>
        ))}

        <Divider my={4} />
        <Text fontSize="xl">
          Subtotal: ${subtotal}
        </Text>
<RouterLink to='/payment'>  <Button
          w="100%"
          size="lg"
          colorScheme="gray"
          bg="gray.800"
          color="white"
        >
          Checkout
        </Button></RouterLink>
      
      </Box>
    </Flex>
  );
};

export default Cart;
