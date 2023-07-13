import { FaLaptopCode } from "react-icons/fa";
import { CgSoftwareDownload } from "react-icons/cg";
import { MdCable, MdKeyboard } from "react-icons/md";
import { FiHardDrive } from "react-icons/fi";
import {
  BsFillPeopleFill,
  BsTicket,
  BsTicketPerforated,
  BsTicketPerforatedFill,
} from "react-icons/bs";

const DashboardCategory = [
  {
    name: "Assets",
    count: 100,
    assigned: 75,
    remaining: 25,
    icon: <FaLaptopCode />,
  },
  {
    name: "Accessories",
    count: 20,
    assigned: 13,
    remaining: 7,
    icon: <MdKeyboard />,
  },
  {
    name: "Consumables",
    count: 20,
    assigned: 15,
    remaining: 5,
    icon: <MdCable />,
  },
  {
    name: "Components",
    count: 20,
    assigned: 17,
    remaining: 3,
    icon: <FiHardDrive />,
  },
  {
    name: "Tickets",
    count: 95,
    assigned: 65,
    remaining: 30,
    icon: <BsTicketPerforated />,
  },
  {
    name: "Licences",
    count: 10,
    icon: <CgSoftwareDownload />,
  },
  {
    name: "Users",
    count: 20,
    icon: <BsFillPeopleFill />,
  },

  // {
  //   name: "Closed Tickets",
  //   count: 65,
  //   icon: <BsTicketPerforatedFill />,
  // },
  // {
  //   name: "Open Tickets",
  //   count: 30,
  //   icon: <BsTicket />,
  // },
  // Add other categories here
];

export default DashboardCategory;
