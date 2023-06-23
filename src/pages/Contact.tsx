import { Box, Heading } from "@chakra-ui/react";

export default function Home() {
    return (
        <div className="home-page-container">
            <div className="home-contact-container">
                <Box bg="lightgrey" p='6' borderWidth='1px' borderRadius='lg' height='250px'>
                    <h1>Get in touch</h1>
                    <p>Email us: sustainablecleaningsolutions@gmail.com</p>
                    <p>Call or Text at: </p>
                </Box>
                <Box display='flex' alignItems='center' justifyContent='center' bg='palegoldenrod' p='6' borderRadius='lg' height='250px'>
                    <img src={require("../images/SustainableCleaningSolutions.png")} width='60%' alt='sustainable cleaning solutions'/>
                </Box>
            </div>
            <div>
                <Heading>OPENING HOURS</Heading>
                <p>Mon - Fri: 8am to 8pm</p>
                <p>Sat: Anytime</p>
                <p>Sun: Anytime</p>
            </div>
        </div>
    );
}
