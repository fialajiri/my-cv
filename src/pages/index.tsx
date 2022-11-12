import { Box, Flex } from "@chakra-ui/react";
import Contact from "../components/contact/contact";
import MyPhoto from "../components/photo/my-photo";
import { JobsData } from "../models/jobs-data";
import { EducationData } from "../models/education-data";
import { AboutData } from "../models/about-data";
import { SkillsData } from "../models/skills-data";
import jobsDataCz from "../../public/data/jobs-cz.json";
import educationDataCz from '../../public/data/education-cz.json'
import profileDataCz from '../../public/data/profile-cz.json'
import skillsDataCz from '../../public/data/skills-cz.json'
import WorkExperiance from "../components/work-experiance/work-experiance";
import Education from "../components/education/education";
import AboutMe from "../components/about/about-me";
import Skills from "../components/skills/Skills";

export default function Home() {
  const jobsData = jobsDataCz as JobsData;
  const educationData = educationDataCz as EducationData
  const profileData = profileDataCz as AboutData
  const skillsData = skillsDataCz as SkillsData

  console.log('refresh')
  return (
    <Box backgroundColor='black'>

    <Flex  color='pink.900' maxWidth='80rem' margin='auto'>
      <Flex direction='column' width="50%" bg="orange.100">
        <MyPhoto height={400} width={300} />

      <Flex padding="2rem"  direction="column" gap="2rem" >
        <AboutMe {...profileData} />
        <Skills {...skillsData} />
      </Flex>
      </Flex>
      <Flex padding="2rem" bg="orange.200" direction="column" width="50%" gap="2rem">
        <Contact />
        <WorkExperiance title={jobsData.title} jobs={jobsData.jobs} />
        <Education title={educationData.title} studies={educationData.studies} />
        
      </Flex>
    </Flex>
    </Box>
  );
}
