import React from 'react';
import {
    Box,
    Container,
    Button,
    Flex,
    Spacer,
    Image,
    } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { SearchIcon } from '@chakra-ui/icons';
import { ViewIcon } from '@chakra-ui/icons';
import {Link as RouterLink} from 'react-router-dom';



const Navbar = () => {
    
    return (
        <div>
            <Box p={2}>
                <Container maxW="container.xlg">
                    <Flex justifyContent="space-between" alignItems="flex-end">

                        <Button variant="ghost">
                            En
                            <ChevronDownIcon />
                        </Button>

                        <Spacer />
                        <Image src='https://www.bialetti.com/media/logo/default/5-layers_3x.png' alt="logo" width={100} height={50} ml='10%' />
                        <Spacer />

                        <Box>
                            <Button variant="ghost">
                                <SearchIcon />
                            </Button>

                            <RouterLink to='/'>
                            <Button variant="ghost">
                                Login
                            </Button>
                            </RouterLink>
 
                            <Button variant="ghost">
                                Cart
                            </Button>
                        </Box>

                    </Flex>


                    <Flex alignItems="flex-end">

                        <Box
                            as="span"
                            position="relative"
                            fontSize="md"
                            fontWeight="medium"
                            color="gray.600"
                            mr={4}
                            cursor="pointer"
                            _hover={{
                                _before: {
                                    content: '""',
                                    position: 'absolute',
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    borderBottom: '2px solid',
                                    borderColor: 'blue.500',
                                    opacity: 1,
                                    transform: 'scaleX(1)',
                                    transition: 'opacity 0.5s, transform 0.5s',
                                },
                            }}
                            _before={{
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                bottom: 0,
                                borderBottom: '2px solid',
                                borderColor: 'transparent',
                                opacity: 0,
                                transform: 'scaleX(0)',
                                transition: 'opacity 0.5s, transform 0.5s',
                            }}
                        >
                            COFFEE ROASTING
                        </Box>
                        <Spacer />
                        <Box
                            as="span"
                            position="relative"
                            fontSize="md"
                            fontWeight="medium"
                            color="gray.600"
                            mr={4}
                            cursor="pointer"
                            _hover={{
                                _before: {
                                    content: '""',
                                    position: 'absolute',
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    borderBottom: '2px solid',
                                    borderColor: 'blue.500',
                                    opacity: 1,
                                    transform: 'scaleX(1)',
                                    transition: 'opacity 0.5s, transform 0.5s',
                                },
                            }}
                            _before={{
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                bottom: 0,
                                borderBottom: '2px solid',
                                borderColor: 'transparent',
                                opacity: 0,
                                transform: 'scaleX(0)',
                                transition: 'opacity 0.5s, transform 0.5s',
                            }}
                        >
                            MOKA EXPRESS
                        </Box>
                        <Spacer />
                        <Box
                            as="span"
                            position="relative"
                            fontSize="md"
                            fontWeight="medium"
                            color="gray.600"
                            mr={4}
                            cursor="pointer"
                            _hover={{
                                _before: {
                                    content: '""',
                                    position: 'absolute',
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    borderBottom: '2px solid',
                                    borderColor: 'blue.500',
                                    opacity: 1,
                                    transform: 'scaleX(1)',
                                    transition: 'opacity 0.5s, transform 0.5s',
                                },
                            }}
                            _before={{
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                bottom: 0,
                                borderBottom: '2px solid',
                                borderColor: 'transparent',
                                opacity: 0,
                                transform: 'scaleX(0)',
                                transition: 'opacity 0.5s, transform 0.5s',
                            }}
                        >
                            SHOP
                        </Box>
                        <Spacer />
                        <Box
                            as="span"
                            position="relative"
                            fontSize="md"
                            fontWeight="medium"
                            color="gray.600"
                            mr={4}
                            cursor="pointer"
                            _hover={{
                                _before: {
                                    content: '""',
                                    position: 'absolute',
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    borderBottom: '2px solid',
                                    borderColor: 'blue.500',
                                    opacity: 1,
                                    transform: 'scaleX(1)',
                                    transition: 'opacity 0.5s, transform 0.5s',
                                },
                            }}
                            _before={{
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                bottom: 0,
                                borderBottom: '2px solid',
                                borderColor: 'transparent',
                                opacity: 0,
                                transform: 'scaleX(0)',
                                transition: 'opacity 0.5s, transform 0.5s',
                            }}
                        >
                            NEWS&BLOG
                        </Box>
                        <Spacer />
                        <Box
                            as="span"
                            position="relative"
                            fontSize="md"
                            fontWeight="medium"
                            color="gray.600"
                            mr={4}
                            cursor="pointer"
                            _hover={{
                                _before: {
                                    content: '""',
                                    position: 'absolute',
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    borderBottom: '2px solid',
                                    borderColor: 'blue.500',
                                    opacity: 1,
                                    transform: 'scaleX(1)',
                                    transition: 'opacity 0.5s, transform 0.5s',
                                },
                            }}
                            _before={{
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                bottom: 0,
                                borderBottom: '2px solid',
                                borderColor: 'transparent',
                                opacity: 0,
                                transform: 'scaleX(0)',
                                transition: 'opacity 0.5s, transform 0.5s',
                            }}
                        >
                            ABOUT
                        </Box>
                        <Spacer />
                        <Box
                            as="span"
                            position="relative"
                            fontSize="md"
                            fontWeight="medium"
                            color="gray.600"
                            mr={4}
                            cursor="pointer"
                            _hover={{
                                _before: {
                                    content: '""',
                                    position: 'absolute',
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    borderBottom: '2px solid',
                                    borderColor: 'blue.500',
                                    opacity: 1,
                                    transform: 'scaleX(1)',
                                    transition: 'opacity 0.5s, transform 0.5s',
                                },
                            }}
                            _before={{
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                bottom: 0,
                                borderBottom: '2px solid',
                                borderColor: 'transparent',
                                opacity: 0,
                                transform: 'scaleX(0)',
                                transition: 'opacity 0.5s, transform 0.5s',
                            }}
                        >
                            CONTACT
                        </Box>
                    </Flex>


                </Container>
            </Box>
        </div>
    )
}

export default Navbar
