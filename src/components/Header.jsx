import React from "react";

const Header = () => {
  return (
    <div className="p-3 w-full px-11 flex justify-between items-center">
      <div className="max-w-36">
        <img
          src="https://zebralearn.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FZebraLearnLogo.fde75948.webp&w=1024&q=75"
          alt="logo"
        />
      </div>
      <div className="flex justify-around items-center max-w-3xs w-full">
        <button 
          className="px-4 py-1 border-2 border-[var(--btn-color)] rounded-lg text-[var(--btn-color)] outline-none flex-center hover:text-white cursor-pointer hover:border-amber-100 transition-colors duration-100">
          Use App
        </button>
        <button
          className="px-5 py-1 border-2 border-[var(--btn-color)] rounded-lg bg-[var(--btn-color)] text-white outline-none flex-center uppercase hover:scale-105 transition-transform duration-100 cursor-pointer"
        >Sign In</button>
      </div>
    </div>
  );
};

export default Header;
