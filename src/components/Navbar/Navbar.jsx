import Link from "next/link";
import "./Navbar.css";
import { BsFillFolderFill } from "react-icons/bs";
import { AiOutlineRise } from "react-icons/ai";
import { MdLibraryBooks } from "react-icons/md";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const tabsArr = [
    {
      name: "Experience",
      icon: <AiOutlineRise />,
      url: "/",
    },
    {
      name: "Projects",
      icon: <BsFillFolderFill />,
      url: "/projects",
    },
    {
      name: "Articles",
      icon: <MdLibraryBooks />,
      url: "/articles",
    },
  ];

  const currentRoute = usePathname();

  return (
    <>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-[10px] w-full">
        {tabsArr.map((tab) => (
          <Link
            href={tab.url}
            key={tab.name}
            className={` w-full h-16 py-3 px-5 bg-[#292929] font-bold items-center flex justify-center text-lg rounded-xl text-center hover:no-underline ${
              currentRoute === tab.url && "active"
            }`}
          >
            {tab.icon}&nbsp; {tab.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
