import { Box, Flex, Text } from "@chakra-ui/react";
import { Skill } from "../../models/skills-data";

const SkillItem: React.FC<Skill> = ({ name, proficiency }) => {
  const proficiencyPercent = Math.round(proficiency / 100);
  console.log(proficiency)

  return (
    <Flex direction="column" gap='.5rem'>
      <Text fontSize='xl' fontWeight="medium">{name}</Text>
      <Box border="0.1rem" borderStyle="solid" borderColor="orange.300"  width='100%' zIndex=''>
        <Box backgroundColor='orange.200' width={`${proficiency}%`} height="1.8rem">&nbsp;</Box>
      </Box>
    </Flex>
  );
};

export default SkillItem;
