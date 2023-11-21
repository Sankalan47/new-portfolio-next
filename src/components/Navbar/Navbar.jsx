"use client";
import { SimpleGrid, useColorModeValue, useColorMode } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import "./Navbar.css";
import { BsFillFolderFill } from "react-icons/bs";
import { AiOutlineRise } from "react-icons/ai";
import { MdLibraryBooks } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const tabsArr = [
    {
      name: "Experience",
      icon: <AiOutlineRise />,
      url: "/",
      activeClass: "active__exp",
    },
    {
      name: "Projects",
      icon: <BsFillFolderFill />,
      url: "/projects",
      activeClass: "active__proj",
    },
    {
      name: "Articles",
      icon: <MdLibraryBooks />,
      url: "/articles",
      activeClass: "active__blog",
    },
  ];
  const { colorMode } = useColorMode();

  const currentRoute = usePathname();

  const bg = useColorModeValue("orange.400", "orange.500");

  return (
    <>
      <SimpleGrid columns={{ md: 3, sm: 1 }} spacing={"10px"} width={"100%"}>
        {tabsArr.map((tab) => (
          <Link
            href={tab.url}
            key={tab.name}
            width={"100%"}
            height={"60px"}
            padding={"12px 20px 12px 20px"}
            background="var(--chakra-colors-whiteAlpha-300)"
            className={currentRoute === tab.url && "active"}
            fontWeight={700}
            alignItems="center"
            display="flex"
            justifyContent="center"
            fontSize="18px"
            borderRadius="13px"
            lineHeight="1.5em"
            letterSpacing="-0.2px"
            textAlign="center"
            border={
              colorMode === "light" && `1px solid var(--chakra-colors-gray-300)`
            }
            _hover={{ textDecoration: "none" }}
          >
            {tab.icon}&nbsp; {tab.name}
          </Link>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Navbar;
