import { Flex, Text, Link, UnorderedList, ListItem } from "@chakra-ui/react";
import dictionaryCz from '../../../public/data/cs/dictionary-cz.json'
import { Job } from "../../models/jobs-data";

const JobDescription: React.FC<Job> = ({
  company,
  jobTitle,
  startDate,
  endDate,
  responsibilities,
}) => {
  const dateFrom = new Date(startDate).getFullYear();
  const dateTo = new Date(endDate).getFullYear() || dictionaryCz.present;
  return (
    <Flex direction="column" gap='.5rem'>
      <Flex fontSize="2xl" fontWeight="medium" gap="0.1rem">
        <Text>{`${jobTitle} v`}&nbsp;</Text>
        <Link href={company.url} isExternal display="inline">
          <Text>{company.name}</Text>
        </Link>
      </Flex>

      <Text fontSize='lg' fontStyle="italic" as="span">{` ${company.location}, ${dateFrom} - ${dateTo}`}</Text>
      <UnorderedList display='flex' flexDirection='column' gap='0.25rem'>
        {responsibilities.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </UnorderedList>
    </Flex>
  );
};

export default JobDescription;
