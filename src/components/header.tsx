import { Tabs, Tab, TabList, TabIndicator } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <Tabs position="relative" variant="unstyled">
                <TabList>
                    <Tab><Link to='home'>Home</Link></Tab>
                    <Tab><Link to={'about'}>About</Link></Tab>
                    <Tab>Contact</Tab>
                    <Tab>Meet The Team</Tab>
                    <Tab>Services</Tab>
                    <Tab>FAQs</Tab>
                </TabList>
                <TabIndicator
                    mt="-1.5px"
                    height="2px"
                    bg="black"
                    borderRadius="1px"
                />
            </Tabs>
            <h1 className={'text-center'}>Sustainable Cleaning Solutions</h1>
        </div>
    );
}
