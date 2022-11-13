import ContactItem from "./contact-item";
import { Flex, Heading } from "@chakra-ui/react";
import { ContactData } from "../../models/contact-data";

const Contact: React.FC<ContactData> = ({name,occupation, contactItems}) => {
  

  return (
    <Flex direction="column" gap="1.5rem">
      <Heading textTransform="uppercase">{name}</Heading>
      {/* <Heading>{occupation}</Heading> */}
      <Flex direction="column" gap=".5rem">
        {contactItems.map((item, index) => (
          <ContactItem icon={item.icon} text={item.text} link={item.link} key={index} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Contact;
