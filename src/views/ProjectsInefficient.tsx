import { Box, Link, Grid, GridItem, Container} from "@chakra-ui/react"
import Images from "../images/Img1"

const PROJECTS = [
    <Box maxW='800px' borderWidth='1px' borderRadius='lg' overflow='hidden' alignContent='center'>
      <Link href={'https://github.com/Vaishali-Anapayan/PacMan'}>
      <Images></Images>
      </Link>
      <Box p='4'>
        <Box
          mt='1'
          fontWeight='semibold'
          noOfLines={1}
          textAlign='left'>
          {'PacMan'}
        </Box>
        <Box fontSize='sm' textAlign='left'>
          {'Hi the PacMan game using Java in JGrasp and used 2D arrays to create the game board. Employed object-oriented programming to display images, track game points, and develop new features such as additional play time and an improved points system.'}
        </Box>
      </Box>
    </Box>
  ,
  <Box maxW='800px' borderWidth='1px' borderRadius='lg' overflow='hidden' alignContent='center'>
  <Link href={'https://github.com/Vaishali-Anapayan/PacMan'}>
  <Images></Images>
  </Link>
  <Box p='4'>
    <Box
      mt='1'
      fontWeight='semibold'
      noOfLines={1}
      textAlign='left'>
      {'PacMan'}
    </Box>
    <Box fontSize='sm' textAlign='left'>
      {'Recreated the PacMan game using Java in JGrasp and used 2D arrays to create the game board. Employed object-oriented programming to display images, track game points, and develop new features such as additional play time and an improved points system.'}
    </Box>
  </Box>
</Box>
  ,
  <Box maxW='800px' borderWidth='1px' borderRadius='lg' overflow='hidden' alignContent='center'>
  <Link href={'https://github.com/Vaishali-Anapayan/PacMan'}>
  <Images></Images>
  </Link>
  <Box p='4'>
    <Box
      mt='1'
      fontWeight='semibold'
      noOfLines={1}
      textAlign='left'>
      {'PacMan'}
    </Box>
    <Box fontSize='sm' textAlign='left'>
      {'Recreated the PacMan game using Java in JGrasp and used 2D arrays to create the game board. Employed object-oriented programming to display images, track game points, and develop new features such as additional play time and an improved points system.'}
    </Box>
  </Box>
</Box>
  ,
  <Box maxW='800px' borderWidth='1px' borderRadius='lg' overflow='hidden' alignContent='center'>
  <Link href={'https://github.com/Vaishali-Anapayan/PacMan'}>
  <Images ></Images>
  </Link>
  <Box p='4'>
    <Box
      mt='1'
      fontWeight='semibold'
      noOfLines={1}
      textAlign='left'>
      {'PacMan'}
    </Box>
    <Box fontSize='sm' textAlign='left'>
      {'Recreated the PacMan game using Java in JGrasp and used 2D arrays to create the game board. Employed object-oriented programming to display images, track game points, and develop new features such as additional play time and an improved points system.'}
    </Box>
  </Box>
</Box>
]

export const ProjectsInefficient = () => (
<Container centerContent={false} margin='1'>
    <Grid templateColumns='repeat(3, 3fr)' gap={6}> 
    {PROJECTS.map((project) => {
      return (<Grid> {project} </Grid>)
    })}
    </Grid>
</Container>
  )