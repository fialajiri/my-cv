import { GetStaticProps, NextPage } from "next";
import { Box, Flex } from "@chakra-ui/react";
import LanguageSwitch from "../components/languages/language-switch";
import Contact from "../components/contact/contact";
import MyPhoto from "../components/photo/my-photo";
import {
  JobsData,
  EducationData,
  ProfileData,
  SkillsData,
  ProjectData,
  ContactData,
} from "../models";
import contactDataCz from "../../public/data/cs/contact-cz.json";
import contactDataEn from "../../public/data/en/contact-en.json";
import profileDataCz from "../../public/data/cs/profile-cz.json";
import profileDataEn from "../../public/data/en/profile-en.json";
import jobsDataCz from "../../public/data/cs/jobs-cz.json";
import jobsDataEn from "../../public/data/en/jobs-en.json";
import educationDataCz from "../../public/data/cs/education-cz.json";
import educationDataEn from "../../public/data/en/education-en.json";
import techSkillsDataCz from "../../public/data/cs/tech-skills-cz.json";
import techSkillsDataEn from "../../public/data/en/tech-skills-en.json";
import languagesSkillsDataCz from "../../public/data/cs/languages-skills-cz.json";
import languagesSkillsDataEn from "../../public/data/en/languages-skills-en.json";
import projectDataCz from "../../public/data/cs/projects-cz.json";
import projectDataEn from "../../public/data/en/projects-en.json";
import WorkExperiance from "../components/work-experiance/work-experiance";
import Education from "../components/education/education";
import AboutMe from "../components/about/about-me";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import { Fragment } from "react";

interface HomeProps {
  profileData: ProfileData;
  contactData: ContactData;
  educationData: EducationData;
  jobsData: JobsData;
  techSkillsData: SkillsData;
  languagesSkillsData: SkillsData;
  projectData: ProjectData;
}

const Home: NextPage<HomeProps> = ({
  contactData,
  educationData,
  jobsData,
  techSkillsData,
  languagesSkillsData,
  projectData,
  profileData,
}) => {
  return (
    <Box backgroundColor="black">
      <Flex color="pink.900" maxWidth="100rem" margin="auto" direction={["column-reverse", "row"]}>
        <Flex direction="column" width={["100%", "50%"]} bg="orange.100">
          <Box display={["none", "inline"]}>
            <MyPhoto />
          </Box>
          <Flex padding={["1rem", "1rem", "1.5rem", "2rem"]} direction="column" gap="4rem">
            <Skills {...techSkillsData} />
            <Projects {...projectData} />
            <Skills {...languagesSkillsData} />
          </Flex>
        </Flex>

        <Flex bg="orange.200" direction="column" width={["100%", "50%"]}>
          <Box display={["inline", "none"]}>
            <MyPhoto />
          </Box>
          <Flex padding={["1rem", "1rem", "1.5rem", "2rem"]} paddingTop='1rem' direction="column" gap="4rem" position='relative'>
            <LanguageSwitch />
            <Contact {...contactData} />
            <AboutMe {...profileData} />
            <WorkExperiance {...jobsData} />
            <Education {...educationData} />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const profileData = (locale === "cs" ? profileDataCz : profileDataEn) as ProfileData;
  const contactData = (locale === "cs" ? contactDataCz : contactDataEn) as ContactData;
  const educationData = (locale === "cs" ? educationDataCz : educationDataEn) as EducationData;
  const jobsData = locale === "cs" ? jobsDataCz : (jobsDataEn as JobsData);
  const techSkillsData = (locale === "cs" ? techSkillsDataCz : techSkillsDataEn) as SkillsData;
  const languagesSkillsData = (
    locale === "cs" ? languagesSkillsDataCz : languagesSkillsDataEn
  ) as SkillsData;
  const projectData = (locale === "cs" ? projectDataCz : projectDataEn) as ProjectData;
  return {
    props: {
      contactData,
      educationData,
      jobsData,
      techSkillsData,
      languagesSkillsData,
      projectData,
      profileData,
    },
  };
};
