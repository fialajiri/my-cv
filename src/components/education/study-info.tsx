import { Flex, Text, Link, UnorderedList, ListItem } from "@chakra-ui/react";
import { Study } from "../../models/education-data";
import dictionaryCz from "../../../public/data/cs/dictionary-cz.json";

const StudyInfo: React.FC<Study> = ({
  university,
  startDate,
  endDate,
  faculty,
  studyType,
  primaryField,
  secondaryField,
  thesis,
}) => {
  const dateFrom = new Date(startDate).getFullYear();
  const dateTo = new Date(endDate).getFullYear();
  return (
    <Flex direction="column" gap=".5rem">
      <Flex fontSize="xl" fontWeight="medium" gap="0.1rem">
        <Link href={university.url} isExternal display="inline">
          <Text>{university.name}</Text>
        </Link>
      </Flex>
      <Text
        fontSize="lg"
        fontStyle="italic"
      >{`${studyType}, ${faculty}, ${dateFrom} - ${dateTo}`}</Text>
      <UnorderedList>
        <ListItem>
          <Text>{`${dictionaryCz.primaryField}: ${primaryField}`}</Text>
        </ListItem>
        {secondaryField && (
          <ListItem>
            <Text>{`${dictionaryCz.secondaryField}: ${secondaryField}`}</Text>
          </ListItem>
        )}

        {thesis && (
          <ListItem>
            <Text>{`${dictionaryCz.thesis}: ${thesis}`}</Text>
          </ListItem>
        )}
      </UnorderedList>
    </Flex>
  );
};

export default StudyInfo;
