

/*const PROJECTS: ProjectProps[] = [{
  imageUrl: 'https://via.placeholder.com/500X300',
  imageAlt: 'Sit amet porttitor eget dolor',
  title: 'Sit amet porttitor eget dolor',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  link: 'https://placeholder.com',
},
{
  imageUrl: 'https://via.placeholder.com/500X300',
  imageAlt: 'Sit amet porttitor eget dolor',
  title: 'Sit amet porttitor eget dolor',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  link: 'https://placeholder.com',
},
{
  imageUrl: 'https://via.placeholder.com/500X300',
  imageAlt: 'Sit amet porttitor eget dolor',
  title: 'Sit amet porttitor eget dolor',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  link: 'https://placeholder.com',
},
{
  imageUrl: 'https://via.placeholder.com/500X300',
  imageAlt: 'Sit amet porttitor eget dolor',
  title: 'Sit amet porttitor eget dolor',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  link: 'https://placeholder.com',
},
{
  imageUrl: 'https://via.placeholder.com/500X300',
  imageAlt: 'Sit amet porttitor eget dolor',
  title: 'Sit amet porttitor eget dolor',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  link: 'https://placeholder.com',
},
{
  imageUrl: 'https://via.placeholder.com/500X300',
  imageAlt: 'Sit amet porttitor eget dolor',
  title: 'Sit amet porttitor eget dolor',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  link: 'https://placeholder.com',
}]*/

import { Grid } from '@chakra-ui/react'
import { ProjectCard, ProjectCardProps } from '../components/ProjectCard'
import Img1 from "../images/Img1"
import Img2 from "../images/Img2"
import Img3 from "../images/Img3"
import Img4 from "../images/Img4"

const PROJECTS: ProjectCardProps[] = [{
  image: Img1,
  title: 'PacMan',
  description: '(Click on image to access the Github link) Recreated the PacMan game using Java in JGrasp and used 2D arrays to create the game board. Employed object-oriented programming to display images, track game points, and develop new features such as additional play time and an improved points system.',
  link: 'https://github.com/Vaishali-Anapayan/PacMan',
},
{
  image: Img2,
  title: 'Sit n Save Lamp',
  description: 'In my Studio Project Course (ECE 198), the goal was the create a product pertaining to the topic of climate change. My partner and I decided to design a lamp that turns on when one sits on their chair, using load cells to sense the weight. We did not end up completing our finished product, however we gained skills in project management, production sourcing and costs, and basic workings of an STM32 board.',
  link: 'https://placeholder.com',
},
{
  image: Img3,
  title: 'STEM Shadow',
  description: '(Click on image to access the STEM Shadow website) In November 2022, my friends and I attended the Women in Engineering Hackathon. Our challenge was to create a product that encouraged more girls and women to break into the STEM industry. Reflecting on what encouraged us to go into this industry, we decided to make our product a mentee and mentor program. We had one day to roughly generate our design, and we also attended a workshops on APIs and React (which helped me create this website).',
  link: 'https://elishamatharu.wixsite.com/stemshadow/about-1',
},
{
  image: Img4,
  title: 'Geese Spotter',
  description: ' ',
  link: 'https://placeholder.com',
}]

export function Projects() {
  return (
    <Grid templateColumns='repeat(3, 2fr)' gap={4}>
      {PROJECTS.map((p: ProjectCardProps, index) => {
        return <ProjectCard key={index} image={p.image} title={p.title} description={p.description} link={p.link} />
      }
      )}
    </Grid>
  )
}