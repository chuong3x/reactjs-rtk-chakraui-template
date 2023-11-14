import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

import LoadingPage from "./pages/LoadingPage";

import backgroundImage from "./assets/images/mid.png";

function App() {
    const [imageLoaded, setImageLoaded] = useState<boolean>(false);

    useEffect(() => {
        const image = new Image();
        image.src = backgroundImage;
        image.onload = () => {
            setImageLoaded(true);
        };
    }, []);

    return (
        <Flex
            id="app"
            position="relative"
            h="100vh"
            w="100vw"
            bgImage={imageLoaded ? `url(${backgroundImage})` : "lightgray"}
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            overflow={"hidden"}
            _after={{
                content: "''",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                zIndex: 1,
            }}
        >
            {!imageLoaded ? <LoadingPage /> : <Outlet />}
        </Flex>
    );
}

export default App;
