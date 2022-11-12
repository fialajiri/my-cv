import myPhoto from "../../../public/images/me-2-wide.jpg";
import Image from "next/image";
import { Flex } from "@chakra-ui/react";

interface MyPhotoProps {
  width: number;
  height: number;
}

const MyPhoto: React.FC<MyPhotoProps> = ({ width, height }) => {
  return (
    <Flex
      alignItems="center"
      direction="column"
      position="relative"
      width="100%"
      height="20rem"
     
    >
      <Image src={myPhoto} alt="Jiri Fiala" fill style={{ objectFit: "cover" }} />
    </Flex>
  );
};

export default MyPhoto;
