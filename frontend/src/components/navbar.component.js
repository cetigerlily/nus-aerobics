import { Icon } from "@chakra-ui/react";
import {
  MdClass,
  MdGridView,
  MdPerson,
  MdWallet,
} from "react-icons/md";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="h-screen w-1/4 flex flex-col p-5 border border-[#393E4610]">
      <p>NUS Aerobics</p>
      <div className="flex flex-row items-center gap-x-2.5">
        <Icon as={MdGridView} />
        <Link to="/">Dashboard</Link>
      </div>
      <div className="flex flex-row items-center gap-x-2.5">
        <Icon as={MdClass} />
        <Link to="/classes">Classes</Link>
      </div>
      <div className="flex flex-row items-center gap-x-2.5">
        <Icon as={MdWallet} />
        <Link to="/wallet">Wallet</Link>
      </div>
      <div className="flex flex-row items-center gap-x-2.5">
        <Icon as={MdPerson} />
        <Link to="/profile">narasmith</Link>
      </div>
    </div>
  );
};

export default NavBar;
