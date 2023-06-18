import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router";

export default function OAuth() {
  const navigate = useNavigate();
  async function onGoogleClick(event) {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      // console.log(user);

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timeStamp: serverTimestamp(),
        });

        navigate("/");
        toast.success("Sign Up successful");
        
      } else {
        toast.error("Already exist");
      }
    } catch (error) {
      toast.error("Could not authorized with Google");
      console.log(error);
    }
  1
  }

  return (
    <button
      type="button"
      onClick={onGoogleClick}
      className="flex items-center justify-center w-full bg-gray-600 text-white px-7 py-3 rounded font-medium uppercase text-sm shadow-md hover:bg-gray-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-black"
    >
      <FcGoogle className="text-xl mr-2" />
      Continue With Google
    </button>
  );
}
