import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { QuotesContext } from "../context/QuotesContext";
const Nav = () => {
  const { savedQuotes } = useContext(QuotesContext);
  return (
    <div className="relative z-10">
      <div className="font-unlock  p-3 flex items-center fixed justify-center text-slate-50 gap-10 bg-slate-50/30 backdrop-blur-xl  text-lg w-full ">
        <Link className="" to={"/"}>
          Home
        </Link>
        <Link className="flex items-center justify-center gap-2" to={"/saved"}>
          Saved{" "}
          <div className="flex items-center justify-center  rounded-full bg-[#f2ce7e] w-[15px] text-gray-900 font-spectral font-bold text-center h-[15px] text-[12px]">
            {savedQuotes.length}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
