import { FaLaptopCode } from "react-icons/fa";
import { CgSoftwareDownload } from "react-icons/cg";
import { MdCable, MdKeyboard } from "react-icons/md";
import { FiHardDrive } from "react-icons/fi";
import { BsFillPeopleFill, BsTicketPerforated } from "react-icons/bs";

const DashboardCategory = [
  {
    name: "Assets",
    count: 0,
    assigned: 0,
    remaining: 0,
    icon: <FaLaptopCode />,
  },
  {
    name: "Accessories",
    count: 0,
    assigned: 13,
    remaining: 7,
    icon: <MdKeyboard />,
  },
  {
    name: "Consumables",
    count: 0,
    assigned: 0,
    remaining: 0,
    icon: <MdCable />,
  },
  {
    name: "Components",
    count: 0,
    assigned: 0,
    remaining: 0,
    icon: <FiHardDrive />,
  },
  {
    name: "Tickets",
    count: 15,
    assigned: 0,
    remaining: 15,
    icon: <BsTicketPerforated />,
  },
  {
    name: "Licences",
    count: 0,
    icon: <CgSoftwareDownload />,
  },
  {
    name: "Users",
    count: 250,
    icon: <BsFillPeopleFill />,
  },
];

export default DashboardCategory;
