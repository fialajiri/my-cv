import me from '../../../public/images/me-scaled.jpg'
import meOptimized from '../../../public/images/me-optimized.jpg'
import Image from "next/image";
import { Flex } from "@chakra-ui/react";

const MyPhoto: React.FC = () => {
  return (
    <Flex alignItems="center" direction="column" >
      <Image src={meOptimized} alt="Jiri Fiala" priority />
    </Flex>
  );
};

export default MyPhoto;
