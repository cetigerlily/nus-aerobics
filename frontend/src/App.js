import "./App.css";
import { ChakraProvider, Icon } from "@chakra-ui/react";
import {
  MdClass,
  MdEventAvailable,
  MdGridView,
  MdPerson,
  MdWallet,
} from "react-icons/md";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="h-screen w-screen flex flex-row">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}

        <div className="h-screen w-1/4 flex flex-col p-5 border border-[#393E4610]">
          <p>NUS Aerobics</p>
          <div className="flex flex-row items-center gap-x-2.5">
            <Icon as={MdGridView} />
            <p>Dashboard</p>
          </div>
          <div className="flex flex-row items-center gap-x-2.5">
            <Icon as={MdClass} />
            <p>Classes</p>
          </div>
          <div className="flex flex-row items-center gap-x-2.5">
            <Icon as={MdEventAvailable} />
            <p>Bookings</p>
          </div>
          <div className="flex flex-row items-center gap-x-2.5">
            <Icon as={MdWallet} />
            <p>Wallet</p>
          </div>
          <div className="flex flex-row items-center gap-x-2.5">
            <Icon as={MdPerson} />
            <p>narasmith</p>
          </div>
        </div>
        <div className="h-screen w-3/4 flex flex-col p-10 bg-[#FCF0F250] gap-y-5">
          <p>Dashboard</p>
          <div className="h-full flex flex-row gap-x-5">
            <div className="h-full w-2/3 flex flex-col rounded-[20px] border border-[#393E4610] p-5 bg-white gap-y-2.5">
              <p>Upcoming classes</p>
              <div className="rounded-[20px] border-l-[4px] border-l-[#1F4776] bg-[#1F477610] p-2.5">
                <p>Class name</p>
                <p>Day, DD Month YYYY HH:MM</p>
                <p>NUS UTown Gym</p>
              </div>
              <div className="rounded-[20px] border-l-[4px] border-l-[#1F4776] bg-[#1F477610] p-2.5">
                <p>Class name</p>
                <p>Day, DD Month YYYY HH:MM</p>
                <p>NUS UTown Gym</p>
              </div>
            </div>
            <div className="h-full w-1/3 flex flex-col gap-y-5">
              <div className="h-1/4 flex flex-col rounded-[20px] border border-[#393E4610] p-5 bg-white">
                <p>10</p>
                <p>credits remaining</p>
              </div>
              <div className="h-3/4 flex flex-col rounded-[20px] border border-[#393E4610] p-5 bg-white">
                <p>Recent transactions</p>
                <TableContainer>
                  <Table variant="simple">
                    <Thead>
                      <Tr>
                        <Th>Description</Th>
                        <Th isNumeric>Amount</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>Deposit</Td>
                        <Td isNumeric>10</Td>
                      </Tr>
                      <Tr>
                        <Td>Booked class</Td>
                        <Td isNumeric>-1</Td>
                      </Tr>
                      <Tr>
                        <Td>Refund</Td>
                        <Td isNumeric>1</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
