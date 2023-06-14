import React, { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";
import { getAuth,sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";


export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  function onChange(event) {
    // console.log(event.target.value);
    setEmail(event.target.value)
  }

  async function onSubmit(event) {
    event.preventDefault()
    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth,email)

      toast.success("Reset email was sent")

    } catch (error) {
      toast.error("Reset email not sent")
    }
    
  }

  return (
    <section>
      <h1 className="text-4xl font-serif mt-6 text-center">Forgot Password</h1>
      <div className=" flex justify-center items-center px-6 py-16 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6 ">
          <img
            src="https://as1.ftcdn.net/v2/jpg/01/18/52/80/1000_F_118528027_3ttnstQpWqxttwhOxlSB5JTYP1f6uJPn.jpg"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w[40%] lg:ml-20">
          <form onSubmit={onSubmit}>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Email address"
              onChange={onChange}
              className="w-full px-4 py-2 text-xl text-gray-800 bg-white rounded transition ease-in-out mb-6"
            />
            
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">
                Don't have an account?
                <Link
                  to="/sign-up"
                  className="text-red-500 hover:text-red-600 ml-1"
                >
                  Register{" "}
                </Link>
              </p>
              <Link
                to="/sign-in"
                className="text-blue-600 hover:text-blue-800"
              >
                Sign in instead{" "}
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-7 py-3 rounded font-medium uppercase text-sm shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
            >
              Send reset password
            </button>
            <div className="flex items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}
