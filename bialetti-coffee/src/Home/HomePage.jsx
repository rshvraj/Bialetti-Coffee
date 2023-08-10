import React, { useState, useEffect } from 'react'
import {
    Box,
    Button,
    Center,
    Image,
    Text,
    Flex,
    Spacer,
    Card,
    CardBody,
    Stack,
    Heading,
    CardFooter,
    Divider,
    ButtonGroup,
    IconButton,
    useColorModeValue
}
    from '@chakra-ui/react'
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import Footer from './Footer';
import Testimonials from './Testimonial';

const HomePage = () => {

    const images = [
        'https://www.bialetti.com/media/wysiwyg/featured-BUONGIORNO-1_1.jpg',
        'https://www.bialetti.com/media/wysiwyg/featured-SOTTO-COPERCHIO-1_1.jpg',
        'https://www.bialetti.com/media/wysiwyg/torrefazione.png',
        'https://www.bialetti.com/media/wysiwyg/featured-FONDI-CAFFE_1.jpg'
        // Add more image paths
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const previousImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        const autoSlide = setInterval(() => {
            nextImage();
        }, 3000); // Slide every 5 seconds

        return () => {
            clearInterval(autoSlide);
        };
    }, [currentImageIndex]);


    return (
        <Box>

            {/* ---------------Sliding box section---------------- */}
            <Box position="relative" maxW="500px" mx="auto" mt={10}>
                <Image
                    src={images[currentImageIndex]}
                    alt={`Slideshow Image ${currentImageIndex + 1}`}
                    w="100%"
                    h="400px"
                    rounded="md"
                    boxShadow="md"
                />

                <Flex
                    position="absolute"
                    justifyContent="space-between"
                    w="100%"
                    p={4}
                    top="50%"
                    transform="translateY(-50%)"
                >
                    <IconButton
                        aria-label="Previous Image"
                        icon={<ChevronLeftIcon />}
                        onClick={previousImage}
                        colorScheme={useColorModeValue('gray', 'white')}
                    />
                    <IconButton
                        aria-label="Next Image"
                        icon={<ChevronRightIcon />}
                        onClick={nextImage}
                        colorScheme={useColorModeValue('gray', 'white')}
                    />
                </Flex>
            </Box>

            <Text fontSize='xl' as='b'>THE REAL ITALIAN COFFEE EXPERIENCE,
                <br />
                NOW SUITABLE FOR INDUCTION
            </Text>
            <br />
            <Button colorScheme='gray'>FIND OUT MORE <ChevronRightIcon /></Button>

            {/* ------------------Three Product Section-------------------- */}
            <Flex>
                <Card maxW='sm'>
                    <CardBody>
                        <Image
                            src='https://www.bialetti.com/media/catalog/product/cache/aa3cd5cfc5adfc06af28f0684be21c47/c/i/cioccolato_2.png'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>Coffee Beans-Delicato</Heading>
                            <Text color='blue.600' fontSize='2xl'>
                                $450
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='blue'>
                                Buy now
                            </Button>
                            <Button variant='ghost' colorScheme='blue'>
                                Add to cart
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>

                <Spacer />
                <Card maxW='sm'>
                    <CardBody>
                        <Image
                            src='https://www.bialetti.com/media/catalog/product/cache/aa3cd5cfc5adfc06af28f0684be21c47/d/e/deka_1.png'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>Ground Coffee-Ciocollato</Heading>
                            <Text color='blue.600' fontSize='2xl'>
                                $450
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='blue'>
                                Buy now
                            </Button>
                            <Button variant='ghost' colorScheme='blue'>
                                Add to cart
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>

                <Spacer />

                <Card maxW='sm'>
                    <CardBody>
                        <Image
                            src='https://www.bialetti.com/media/catalog/product/cache/aa3cd5cfc5adfc06af28f0684be21c47/i/n/intenso_1.png'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>Coffee Beans-Espresso</Heading>
                            <Text color='blue.600' fontSize='2xl'>
                                $450
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='blue'>
                                Buy now
                            </Button>
                            <Button variant='ghost' colorScheme='blue'>
                                Add to cart
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            </Flex>

            {/* -----------------------Essence of italian coffee culutre--------------------- */}
            <Box mt={10}>
                <Heading size='3xl'>THE ESSENCE <br /> OF ITALIAN COFFEE CULTURE</Heading>
                <Center>
                    <Card
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                        p={10}
                        mt={10}
                    >
                        <Image
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '300px' }}
                            src='https://twochimpscoffee.com/wp-content/uploads/2020/04/web-62-600x600.jpg.webp'
                            alt='Caffe Latte'
                        />

                        <Stack>
                            <CardBody>
                                <Heading size='md'>Moka Induction Rossa</Heading>
                                <Heading size='sm'>SINCE 1993 THE COFFEE POT, THAT BRINGS US TOGETHER</Heading>

                                <Text fontFamily="Arial, sans-serif" py='2'>
                                    Bialetti Moka Induction: the original coffee maker, a symbol of Made in Italy, is now also suitable for use on all induction hobs. Bialetti Moka Induction offers the experience of the true Italian ritual of preparing a delicious coffee to enjoy with whoever you want.
                                    Bialetti quality: innovative bi-layer boiler technology offers a high-performance product.
                                </Text>
                                <Button variant='solid' colorScheme='blue'>
                                    Find Out More <ChevronRightIcon />
                                </Button>
                            </CardBody>
                        </Stack>
                    </Card>
                </Center>
            </Box>

            {/* ----------------Inspiration and News Section----------------- */}
            <Box p={4}>
                <Heading size='3xl'>INSPIRATION</Heading>
                <Heading size='xl' >& News</Heading>
                <Flex>
                    <Box width='40%'>
                        <Text fontSize='3xl' fontFamily="Arial, sans-serif" color='brown' mt={20}>"THERE IS ONLY ONE SECRET TO THE PERFECT ITALIAN COFFEE: SHARING"</Text>
                        <Text fontSize='xl' fontFamily="Arial, sans-serif" mt={5}>We Italians love coffee, but we love sharing coffee with our nearest and dearest even more.
                            <br />
                            And if the ground coffee is just right, this act of sharing offers a truly delicious moment to savour.</Text>


                        <Text fontSize='3xl' fontFamily="Arial, sans-serif" color='brown' mt='30%'>PERFECT TASTE</Text>
                        <Text fontSize='xl' fontFamily="Arial, sans-serif" mt={5}>A perfect coffee has to have a perfect taste, above all.
                            This means careful preparation, with a precise choice of the best beans (harvested at exactly the right moment), and aromatic profiles to offer the perfect match with the coffee pot characteristics.
                            Because, to make the best coffee for an iconic pot like the Moka, everything has to be perfect from start to finish.</Text>
                    </Box>
                    <Spacer />
                    <Box>
                        <Image src='https://www.bialetti.com/media/wysiwyg/statement-black-2.png' alt='news image' />
                    </Box>
                </Flex>
            </Box>
            <Testimonials/>
            <Footer/>
        </Box>

    )
}


export default HomePage


