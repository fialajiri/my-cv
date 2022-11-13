import { Flex, Heading } from "@chakra-ui/react";
import { ProjectData } from "../../models";
import Project from "./Project";

const Projects:React.FC<ProjectData> = ({title, projects}) => {
    return (
        <Flex direction="column" gap="1.5rem">
          <Heading>{title}</Heading>
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </Flex>
      );
}

export default Projects