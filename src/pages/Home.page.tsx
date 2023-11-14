import { Container, Flex, HStack, Text } from "@chakra-ui/react";

const HomePage = () => {
    return (
        <Flex w="full" h="full">
            <Container h="full" maxW="1200px">
                <HStack w="full" h="full">
                    <Flex w="400px">
                        <Text>Hello world!</Text>
                    </Flex>
                </HStack>
            </Container>
        </Flex>
    );
};

export default HomePage;
