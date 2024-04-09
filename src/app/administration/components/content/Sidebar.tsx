import Link from "next/link";
import React from "react";
import Image from "next/image";
import LansicareLogo from "../../../../img/LansicareLogo.png";
import { signOut } from "next-auth/react";
import LogoutIcon from "../icon/LogoutIcon";
import DashboardIcon from "../icon/DashboardIcon";
import DataIcon from "../icon/DataIcon";
import ApotekIcon from "../icon/ApotekIcon";

export default function Sidebar() {
  return (
    <>
      <section className="">
        <aside
          id="default-sidebar"
          className="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full overflow-y-auto bg-gray-800 px-3 py-4">
            <ul className="space-y-2 font-medium">
              <li className=" mb-8 mt-4">
                <Image src={LansicareLogo} width={45} alt="LansiCare" />
              </li>
              <li>
                <DashboardIcon />
              </li>
              <li>
                <DataIcon />
              </li>
              <li>
                <ApotekIcon />
              </li>
              <li>
                <LogoutIcon />
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}
