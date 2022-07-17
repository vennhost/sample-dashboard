import React from "react";
import * as Icon from "react-icons/bs";
import {BiLogOut} from "react-icons/bi"

const SideMenu = () => {
  return (
    <div className="flex flex-col justify-between items-center h-screen">
      <div className="mb-auto w-full px-5">
        <div className="flex flex-row justify-start items-center font-semibold text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-5 hover:py-2 hover:rounded-md">
          <span className="mr-4">
            <Icon.BsFillGridFill />
          </span>
          <span>Dashboard</span>
        </div>
        <div className="flex flex-row justify-start items-center font-semibold text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-5 hover:py-2 hover:rounded-md my-4">
          <span className="mr-4">
            <Icon.BsWallet />
          </span>
          <span>Apply for loan</span>
        </div>
        <div className="flex flex-row justify-start items-center font-semibold text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-5 hover:py-2 hover:rounded-md my-4">
          <span className="mr-4">
            <Icon.BsFillPersonFill />
          </span>
          <span>My Account</span>
        </div>
        <div className="flex flex-row justify-start items-center font-semibold text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-5 hover:py-2 hover:rounded-md my-4">
          <span className="mr-4">
            <Icon.BsFileEarmarkFontFill />
          </span>
          <span>History</span>
        </div>
        <div className="flex flex-row justify-start items-center font-semibold text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-5 hover:py-2 hover:rounded-md my-4">
          <span className="mr-4">
            <Icon.BsFillBellFill />
          </span>
          <span>Notifications</span>
        </div>
        <div className="flex flex-row justify-start items-center font-semibold text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-5 hover:py-2 hover:rounded-md my-4">
          <span className="mr-4">
            <Icon.BsGearFill />
          </span>
          <span>Settings</span>
        </div>
        <div className="flex flex-row justify-start items-center font-semibold text-white cursor-pointer hover:transition-all ease-in-out hover:bg-white hover:text-sky-600 hover:px-5 hover:py-2 hover:rounded-md my-4">
          <span className="mr-4">
            <Icon.BsFillQuestionSquareFill />
          </span>
          <span>Help</span>
        </div>
      </div>
      <div className="mt-auto text-white">
        <div className="border rounded-md border-white bg-transparent px-5 py-2">
            <span>Switch Account</span>
        </div>
        <div className="flex flex-row justify-start items-center border rounded-md border-white bg-transparent px-5 py-2 my-5">
            <span className="mr-5">
            <BiLogOut />
            </span>
            <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
