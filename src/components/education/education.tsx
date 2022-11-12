import { Flex, Heading } from "@chakra-ui/react";
import { EducationData } from "../../models/education-data";
import StudyInfo from "./study-info";

const Education: React.FC<EducationData> = ({ title, studies }) => {
  return (
    <Flex direction="column" gap="1.5rem">
      <Heading>{title}</Heading>
      <Flex direction="column" gap="1.5rem">
        {studies.map((study) => (
          <StudyInfo {...study} key={study.id} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Education;
