
import myPhoto from "../../../public/images/me-2e.jpg";
import myPhoto2 from "../../../public/images/me-2.jpg";
import myPhoto3 from "../../../public/images/me-4.jpg";
import Image from "next/image";
import { Flex } from "@chakra-ui/react";

interface MyPhotoProps {
  width: number;
  height: number;
}

const MyPhoto: React.FC<MyPhotoProps> = ({ width, height }) => {
  return (
    <Flex alignItems="center" direction="column">
      <Image src={myPhoto3} alt="Jiri Fiala" priority width={width} height={height} />
    </Flex>
  );
};

export default MyPhoto;
