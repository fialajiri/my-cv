import { Project } from "../../models";
import gitLogo from "../../../public/logos/git-logo-dark.png";
import { Flex, Link, Text } from "@chakra-ui/react";
import Image from "next/image";

const Project: React.FC<Project> = ({ description, git, title, url }) => {
  return (
    <Flex direction='column' gap='0.5rem'>
      <Flex justifyContent='space-between' alignItems="center">
        <Link fontSize='lg' fontWeight='medium' href={url} isExternal>{title}</Link>
        <Link href={git} isExternal>
          <Image src={gitLogo} width={24} height={24} alt="git icon" />
        </Link>
      </Flex>
      <Text>{description}</Text>
    </Flex>
  );
};

export default Project;
