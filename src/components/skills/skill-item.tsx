import { Box, Flex, Text } from "@chakra-ui/react";
import { Skill } from "../../models/skills-data";

const SkillItem: React.FC<Skill> = ({ name, proficiency }) => {
  return (
    <Flex direction="column" gap=".25rem">
      <Text fontSize="lg" fontWeight="medium">
        {name}
      </Text>
      <Box border="0.1rem" borderStyle="solid" borderColor="orange.300" width="100%" >
        <Box backgroundColor="orange.200" width={`${proficiency}%`} height="1rem">
          &nbsp;
        </Box>
      </Box>
    </Flex>
  );
};

export default SkillItem;
