import { Flex, Text, Link, UnorderedList, ListItem } from "@chakra-ui/react";
import { Study } from "../../models/education-data";
import { useDictionary } from "../../context/dictionary-context";

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
  const { dictionary } = useDictionary();
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
          <Text>{`${dictionary.primaryField}: ${primaryField}`}</Text>
        </ListItem>
        {secondaryField && (
          <ListItem>
            <Text>{`${dictionary.secondaryField}: ${secondaryField}`}</Text>
          </ListItem>
        )}

        {thesis && (
          <ListItem>
            <Text>{`${dictionary.thesis}: ${thesis}`}</Text>
          </ListItem>
        )}
      </UnorderedList>
    </Flex>
  );
};

export default StudyInfo;
