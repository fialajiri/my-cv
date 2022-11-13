import { Flex, Heading } from "@chakra-ui/react";
import { SkillsData } from "../../models/skills-data";
import SkillItem from "./skill-item";

const Skills: React.FC<SkillsData> = ({ title, skills }) => {
  return (
    <Flex direction="column" gap="1.5rem">
      <Heading>{title}</Heading>
      {skills.map((skill, index) => (
        <SkillItem key={index} {...skill} />
      ))}
    </Flex>
  );
};

export default Skills;
