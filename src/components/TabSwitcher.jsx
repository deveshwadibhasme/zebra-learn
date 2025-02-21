import Skeleton from "../components/Skeleton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBook,
  faUserGraduate,
  faSchool,
  faTelevision,
  faBriefcase,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

const TabSwitcher = () => {
  const tabs = [
    {
      link: "/books",
      icon: faBook,
      label: "Books",
    },
    {
      link: "/courses",
      icon: faUserGraduate,
      label: "Courses",
    },
    {
      link: "/schools",
      icon: faSchool,
      label: "Schools",
    },
    {
      link: "/live",
      icon: faTelevision,
      label: "Live",
    },
    {
      link: "/business",
      icon: faBriefcase,
      label: "For Business",
    },
    {
      link: "/contact-us",
      icon: faPhone,
      label: "Contact Us",
    },
  ];

  const { pathname } = useLocation();

  return (
    <div className="max-w-6xl w-full h-20 flex gap-4 mx-auto py-2 overflow-x-auto px-2">
      <Link
        to={"/"}
        className={`w-10 h-10 shrink-0 rounded-full text-white border-1 
          ${pathname === "/" ? "border-white" : "border-white/15"} 
          flex-center`}
      >
        <FontAwesomeIcon icon={faHome} />
      </Link>
      {tabs.map((tab, index) => (
        <>
          {(
            <Skeleton
              width={"w-20"}
              height={"h-10"}
              borderRadius={"rounded-lg"}
            />
          ) && (
            <Link
              to={tab.link}
              key={index}
              className={`h-10 gap-2 px-4 py-3 rounded-lg text-white/50 hover:text-white cursor-pointer border-1 
          ${pathname === `${tab.link}` ? "border-white" : "border-white/15"} 
          flex-center`}
            >
              <FontAwesomeIcon icon={tab.icon} />
              <span className="text-sm font-normal">{tab.label}</span>
            </Link>
          )}
        </>
      ))}
    </div>
  );
};

export default TabSwitcher;
