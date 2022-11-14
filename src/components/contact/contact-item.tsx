import { Flex, Link, Text } from "@chakra-ui/react";
import { ContactItemProps, LinkTypes } from "../../models/contact-data";
import Image from "next/image";

const iconWidth = 24;
const iconHeight = 24;

const ContactItem: React.FC<ContactItemProps> = ({ icon, text, link }) => {
  let textElement = <Text as="span">{text}</Text>;

  if (link) {
    const { url, type } = link;
    let href = url;

    if (type === LinkTypes.Phone) {
      href = `tel:${url}`;
    } else if (type === LinkTypes.Email) {
      href = `mailto:${url}`;
    }

    textElement = (
      <Link href={href} isExternal={type === LinkTypes.Link}>
        {textElement}
      </Link>
    );
  }

  return (
    <Flex alignItems="center" gap={[".25rem",'1rem']}>
      <Image src={icon} width={iconWidth} height={iconHeight} alt="GitHub logo" />
      {textElement}
    </Flex>
  );
};

export default ContactItem;
