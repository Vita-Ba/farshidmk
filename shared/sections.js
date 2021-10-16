import { GiBookCover, GiNotebook } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";

export const SECTIONS = [
  {
    id: 1,
    title: "کتاب",
    icon: <GiBookCover />,
    link: "/books",
  },
  {
    id: 2,
    title: "آموزشی",
    icon: <FaChalkboardTeacher />,
    link: "/learning",
  },
  {
    id: 3,
    title: "ادبیات",
    icon: <GiNotebook />,
    link: "/literature",
  },
  {
    id: 4,
    title: "رزومه",
    icon: <MdWork />,
    link: "/resume",
  },
];
