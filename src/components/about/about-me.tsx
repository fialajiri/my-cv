import Image from "next/image";
import { Flex, Heading } from "@chakra-ui/react";
import { AboutData } from "../../models/profile-data";
const iconWidth = 40;
const iconHeight = 40;

const AboutMe: React.FC<AboutData> = ({ title, bio }) => {
  return (
    <Flex direction="column" gap="1.5rem">
      <Heading>{title}</Heading>
      {bio}
    </Flex>
  );
};

export default AboutMe;
