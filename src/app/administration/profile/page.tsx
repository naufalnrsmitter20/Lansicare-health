import React from "react";
import WelcomeBack from "../components/WelcomeBack";
import Headers from "../components/content/Headers";
import Sidebar from "../components/content/Sidebar";
import DataAdmin from "../components/content/DataAdmin";

export default function profile() {
  return (
    <div>
      <div className="flex">
        <Sidebar />

        <div className="ml-64 mt-6 w-3/4 max-w-full">
          <Headers name="PROFILE" />
          <div className="absolute right-0 top-0 mx-4 max-w-lg">
            <WelcomeBack />
          </div>
          <DataAdmin />
        </div>
      </div>
    </div>
  );
}
