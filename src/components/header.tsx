import { Tabs, Tab, TabList, TabIndicator } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header-container">
            <img src={require("../images/SustainableCleaningSolutions.png")} alt="sustainable cleaning solutions" width="280" height="260"/>
            <Tabs position="relative" variant="unstyled" className="tabs">
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
        </div>
    );
}
