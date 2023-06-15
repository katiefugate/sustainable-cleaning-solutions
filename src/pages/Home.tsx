import { Box, Heading } from "@chakra-ui/react";

export default function Home() {
    return (
        <div className="home-page-container">
            <Heading as='h3' size='lg' className="text-center">WELCOME TO SUSTAINABLE CLEANING SOLUTIONS</Heading>
            <div className='text-center'>
                <p>Since our founding, we've worked with numerous clients throughout the area. Great service begins and ends
                    with experienced and friendly professionals, which is why we put so much consideration into selecting
                    only the best to join our team. We complete projects efficiently and on schedule, and go above and
                    beyond to form lasting relationships with our clients.</p>
            </div>
            <div className="home-contact-container">
                <Box bg="lightgrey" p='6' borderWidth='1px' borderRadius='lg' height='250px'>
                    <h1>Get in touch</h1>
                    <p>Email us: sustainablecleaningsolutions@gmail.com</p>
                    <p>Call or Text at: </p>
                </Box>
                <Box display='flex' alignItems='center' justifyContent='center' bg='palegoldenrod' p='6' borderRadius='lg' height='250px'>
                    <img src={require("../images/SustainableCleaningSolutions.png")} width='60%'/>
                </Box>
            </div>
        </div>
    );
}
