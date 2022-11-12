import { Flex, Heading } from "@chakra-ui/react";
import { JobsData } from "../../models/jobs-data";
import JobDescription from "./job-description";

const WorkExperiance: React.FC<JobsData> = ({ jobs, title }) => {
  return (
    <Flex direction="column" gap="1.5rem" >
      <Heading>{title}</Heading>
      <Flex direction="column" gap="1.5rem">
        {jobs.map((job) => (
          <JobDescription {...job} key={job.id} />
        ))}
      </Flex>
    </Flex>
  );
};

export default WorkExperiance;
