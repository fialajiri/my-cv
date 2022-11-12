import ContactItem from "./contact-item";
import { Flex, Heading, Text } from "@chakra-ui/react";
import contactCz from "../../../public/data/contact-cz.json";
import { ContactData } from "../../models/contact-data";

const Contact: React.FC = () => {
  const contactData = contactCz as ContactData;

  return (
    <Flex direction="column" gap="1.5rem">
      <Heading textTransform="uppercase">{contactData.name}</Heading>
      <Heading>{contactData.occupation}</Heading>
      <Flex direction="column" gap=".5rem">
        {contactData.contactItems.map((item, index) => (
          <ContactItem icon={item.icon} text={item.text} link={item.link} key={index} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Contact;
