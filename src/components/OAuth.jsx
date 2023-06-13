import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function OAuth() {
  return (
    <button className="flex items-center justify-center w-full bg-gray-800 text-white px-7 py-3 rounded font-medium uppercase text-sm shadow-md hover:bg-gray-900 transition duration-150 ease-in-out hover:shadow-lg active:bg-black">
      <FcGoogle className="text-xl mr-2" />
      Continue With Google
    </button>
  );
}
