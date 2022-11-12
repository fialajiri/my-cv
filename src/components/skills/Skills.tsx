import { Flex, Heading } from "@chakra-ui/react";
import { SkillsData } from "../../models/skills-data";
import SkillItem from "./skill-item";

const Skills: React.FC<SkillsData> = ({ title, techs }) => {
  return (
    <Flex direction="column" gap="1.5rem">
      <Heading>{title}</Heading>
      {techs.map((tech, index) => (
        <SkillItem key={index} {...tech} />
      ))}
    </Flex>
  );
};

export default Skills;
