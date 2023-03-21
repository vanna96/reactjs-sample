import { Sidebar } from "../../components/Sidebar";
import { BreadCrumbsMenu } from "../../components/Breadcrumbs";
import React from "react";
import { toast, Toaster } from "react-hot-toast";

export default function ManageAboutUs() {
  return (
    <div className="grid md:grid-cols-3 xl:grid-cols-12">
      <Toaster />
      <Sidebar menu="manage-about-us" />
      <div
        className="md:col-span-2 px-12 bg-gray-300 xl:col-span-10"
        style={{ minHeight: "100vh" }}
      >
        <BreadCrumbsMenu menu="About Us" />
        <div className="bg-white mt-5 rounded-md p-4">
          <div className="pt-2 mb-3 flex items-center space-x-2">
            <label className="font-bold text-2xl">About Us</label>
          </div>
          <hr className="h-[0.5] bg-gray-100 mb-8"></hr>
        </div>
      </div>
    </div>
  );
}
