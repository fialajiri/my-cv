import { Flex, Heading } from "@chakra-ui/react";
import { ProfileData } from "../../models/profile-data";

const AboutMe: React.FC<ProfileData> = ({ title, bio }) => {
  return (
    <Flex direction="column" gap="1.5rem">
      <Heading>{title}</Heading>
      {bio}
    </Flex>
  );
};

export default AboutMe;
