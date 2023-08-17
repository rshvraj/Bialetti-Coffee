import React, { useState, useEffect, useRef } from 'react'
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
import { TweenMax,Power3 } from 'gsap';
import coffee1 from './images/Coffee1.png';
import coffee3 from './images/Coffee3.png';
import coffee4 from './images/coffee4.png';
import coffee5 from './images/coffee5.png';
import {gsap} from 'gsap';
import styles from './home.module.css';

const HomePage = () => {
    const logoItem1 = useRef(null);
    const logoItem2 = useRef(null);
    const logoItem3 = useRef(null);
    const txt = useRef(null);
    const btn1 = useRef(null);

    useEffect(() => {
        let myAnime1 = logoItem1.current;
        let myAnime2 = logoItem2.current;
        let myAnime3 = logoItem3.current;
        let txtAnime = txt.current;
        let btnAnime = btn1.current;

        gsap.from(
            myAnime2,
            1,{
                opacity:0,
                x: -40,
                ease: Power3.easeOut,
                delay:1
            }
        )
        gsap.from(
            myAnime1,
            1,{
                opacity:0,
                y: 40,
                ease: Power3.easeOut,
                delay:0.5
            }
        )
        gsap.from(
            myAnime3,
            1,{
                opacity:0,
                x: 40,
                ease: Power3.easeOut,
                delay:1.5
            }
        )
        gsap.from(
            txtAnime,
            1,{
                opacity:0,
                y: -40,
                ease: Power3.easeOut,
                delay:2
            }
        )
        gsap.to(
            btnAnime,
            1,{
                css:{visibility:"visible"},
                opacity:1,
                y: 40,
                ease: Power3.easeOut,
                delay:2.5,               
            }
        )
    },[])

    return (
        <Box>
            {/* ---------------Sliding box section---------------- */}
            <Box position="relative" mt={10} p={5}>
                <Flex className={styles.gsapImage}>
                <Box className={styles.coffee4}>    
                <Image
                    ref={logoItem2}
                    src={coffee4}
                    alt='image2' 
                />
                </Box>
                <Spacer/>
                <Box className={styles.coffee1}>
                <Image
                    ref={logoItem1}
                    src={coffee1}
                    alt={`Slideshow Image`}
                />
                </Box>
                <Spacer/>
                <Box className={styles.coffee5}>
                <Image
                    ref={logoItem3}
                    src={coffee5}
                    alt='image3'
                />
                </Box>
                
                </Flex>
            </Box>

            <Text ref={txt} fontSize='xl' as='b'>THE REAL ITALIAN COFFEE EXPERIENCE,
                <br />
                NOW SUITABLE FOR INDUCTION
            </Text>
            <br />
            <Button className={styles.findBtn} colorScheme='blue' ref={btn1} >FIND OUT MORE <ChevronRightIcon /></Button>

            {/* ------------------Three Product Section-------------------- */}
            <Flex p={4} className={styles.productImage}>
                <Card maxW='sm'>
                    <CardBody>
                        <Image
                            src='https://www.bialetti.com/media/catalog/product/cache/aa3cd5cfc5adfc06af28f0684be21c47/c/i/cioccolato_2.png'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>Coffee Beans Delicato</Heading>
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
                            width="30%"
                            src={coffee3}
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
                <Flex className={styles.inspirationBox}>
                    <Box className={styles.inspirationPara} >
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


