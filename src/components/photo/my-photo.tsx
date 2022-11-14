import myPhoto3 from "../../../public/images/me-4.jpg";
import Image from "next/image";
import { Flex } from "@chakra-ui/react";

const MyPhoto: React.FC = () => {
  return (
    <Flex alignItems="center" direction="column" >
      <Image src={myPhoto3} alt="Jiri Fiala" priority />
    </Flex>
  );
};

export default MyPhoto;
