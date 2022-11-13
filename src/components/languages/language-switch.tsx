import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import unionJack from "../../../public/icons/union-jack.png";
import czechFlag from "../../../public/icons/czech-flag.png";

import { Flex } from "@chakra-ui/react";

const LanguageSwitch: React.FC = () => {
  const { locale } = useRouter();

  return (
    <Flex position="absolute" top='0.5%' right='1%' >
      {locale === "cs" && (
        <Link color="white" href="/" locale="en">
          <Image src={unionJack} alt="british flag" height={24} />
        </Link>
      )}
      {locale === "en" && (
        <Link href="/" locale="cs">
          <Image src={czechFlag} alt="czech flag" height={24} />
        </Link>
      )}
    </Flex>
  );
};

export default LanguageSwitch;
