import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router";

export default function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { name, email } = formData;

  function onLogOut() {
    auth.signOut();
    navigate("/");
  }
  return (
    <>
      <section className="mx-auto flex justify-center items-center flex-col">
        <h1 className="text-5xl text-center font-bold mt-6">My Profile</h1>
        <div className="w-full md:w-[50%] mt-10 mx-3">
          <form>
            <input
              type="text"
              id="name"
              value={name}
              placeholder="Full Name"
              disabled
              className="w-full px-4 py-2 text-xl font-semibold text-gray-600 border-gray-300 bg-white rounded-lg transition ease-in-out mb-5 "
            />
            <input
              type="text"
              id="email"
              value={email}
              placeholder="Full Name"
              disabled
              className="w-full px-4 py-2 text-xl font-semibold text-gray-600 border-gray-300 bg-white rounded-lg transition ease-in-out  mb-5"
            />
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p className="flex items-center">
                {" "}
                Do you want to change your name?
                <span className="ml-2 cursor-pointer text-blue-500 font-semibold transition ease-in-out duration-200 hover:text-blue-700">
                  Edit
                </span>
              </p>
              <p
                onClick={onLogOut}
                className="ml-2 cursor-pointer text-red-500 font-semibold transition ease-in-out duration-200 hover:text-red-600"
              >
                Sign out
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
