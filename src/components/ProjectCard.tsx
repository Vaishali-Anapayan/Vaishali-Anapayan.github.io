import { Box, Image, Link } from "@chakra-ui/react"

//const images = [Img1, Img2]

export type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
  image: () => JSX.Element;
}
//
export function ProjectCard(props: ProjectCardProps) {
  return (
    <Box maxW='500px' borderWidth='2px' borderRadius='lg' overflow='hidden' alignContent='center'>
      <Link href={props.link}>
      <props.image/>
      </Link>
      <Box p='4'>
        <Box
          mt='1'
          fontWeight='semibold'
          noOfLines={1}
          textAlign='left'
        >
          {props.title}
        </Box>

        <Box fontSize='sm' textAlign='left'>
          {props.description}
        </Box>
      </Box>
    </Box>
  )
}