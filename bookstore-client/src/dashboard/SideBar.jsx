import { Sidebar } from "flowbite-react";
import {
  HiArrowCircleDown,
  HiArrowCircleRight,
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiOutlineCloudUpload,
  HiTable,
} from "react-icons/hi";

import userImg from "../assets/profile.jpg";

const SideBar = () => {
  return (
    <Sidebar aria-label="Sidebar with logo branding example">
      <Sidebar.Logo href="#" img="./fow" imgAlt="">
        <p>User Name</p>
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>

          <Sidebar.Item
            href="/admin/dashboard/upload"
            icon={HiOutlineCloudUpload}
          >
            Upload Books
          </Sidebar.Item>

          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            Manage Books
          </Sidebar.Item>

          <Sidebar.Item href="/login" icon={HiArrowCircleRight}>
            Login
          </Sidebar.Item>

          <Sidebar.Item href="/logout" icon={HiTable}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SideBar;
