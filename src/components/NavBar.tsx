import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { AboutMe } from "../views/AboutMe"
import {Projects} from "../views/Projects"

export const NavBar = () => (
	<Tabs>
	<TabList>
		<Tab>About Me</Tab>
		<Tab>Projects</Tab>
		<Tab>Contact</Tab>
	</TabList>

	<TabPanels>
		<TabPanel>
			<AboutMe />
		</TabPanel>
		<TabPanel fontWeight='semibold'>
			<p>Projects</p>
			<Projects/>
		</TabPanel>
		<TabPanel>
			<p>Contact</p>
			
		</TabPanel>
	</TabPanels>
</Tabs>
)