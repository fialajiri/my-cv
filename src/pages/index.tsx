import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Flex } from "@chakra-ui/react";
import Contact from "../components/contact/contact";
import MyPhoto from "../components/photo/my-photo";
import {
  JobsData,
  EducationData,
  AboutData,
  SkillsData,
  ProjectData,
  ContactData,
} from "../models";
import jobsDataCz from "../../public/data/cs/jobs-cz.json";
import educationDataCz from "../../public/data/cs/education-cz.json";
import profileDataCz from "../../public/data/cs/profile-cz.json";
import techSkillsDataCz from "../../public/data/cs/tech-skills-cz.json";
import projectDataCz from "../../public/data/cs/projects-cz.json";
import contactDataCz from "../../public/data/cs/contact-cz.json";
import contactDataEn from "../../public/data/en/contact-en.json";
import languagesSkillsDataCz from "../../public/data/cs/languages-skills-cz.json";
import WorkExperiance from "../components/work-experiance/work-experiance";
import Education from "../components/education/education";
import AboutMe from "../components/about/about-me";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";

interface HomeProps {
  contactData: ContactData;
}

const Home: NextPage<HomeProps> = ({ contactData }) => {
  console.log(contactData);
  const jobsData = jobsDataCz as JobsData;
  const educationData = educationDataCz as EducationData;
  const profileData = profileDataCz as AboutData;
  const skillsData = techSkillsDataCz as SkillsData;
  const projectData = projectDataCz as ProjectData;
  const languagesData = languagesSkillsDataCz as SkillsData;

  const { locale } = useRouter();
  console.log(locale);

  console.log("refresh");
  return (
    <Box backgroundColor="black">
      <Link color="white" href="/" locale="en">
        En
      </Link>
      <Link href="/" locale="cs">
        Cs
      </Link>
      <Flex color="pink.900" maxWidth="80rem" margin="auto">
        <Flex direction="column" width="50%" bg="orange.100">
          <MyPhoto height={427} width={640} />

          <Flex padding="2rem" direction="column" gap="4rem">
            <AboutMe {...profileData} />
            <Skills {...skillsData} />
            <Projects {...projectData} />
            <Skills {...languagesData} />
          </Flex>
        </Flex>
        <Flex padding="2rem" bg="orange.200" direction="column" width="50%" gap="4rem">
          <Contact {...contactData} />
          <WorkExperiance {...jobsData} />
          <Education {...educationData} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const contactData =
    locale === "cs" ? (contactDataCz as ContactData) : (contactDataEn as ContactData);

  return {
    props: {
      contactData,
    },
  };
};
