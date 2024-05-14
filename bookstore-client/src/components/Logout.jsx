import React, { useContext } from "react";
import { AuthNContext } from "../context/AuthNProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Logout = () => {
  const { logOut } = useContext(AuthNContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pahtname || "/";
  const handleLogout = () => {
    logOut().then(() => {
      navigate(from, { replace: true });
    });
  };
  return (
    <div className="h-screen bg-teal-100 flex items-center justify-center">
      <button
        className=" text-red-500 px-8 py-2 rounded "
        onClick={handleLogout}
      >
        Log Out
      </button>
    </div>
  );
};

export default Logout;
