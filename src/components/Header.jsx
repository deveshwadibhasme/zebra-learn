import React from "react";

const Header = () => {
  return (
    <header className="p-3 w-full px-8 md:px-11 flex justify-between items-center">
      <div className="max-w-36">
        <img
          src="https://zebralearn.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FZebraLearnLogo.fde75948.webp&w=1024&q=75"
          alt="logo"
        />
      </div>
      <div className="flex justify-around items-center max-w-18 md:max-w-3xs w-full">
        <button 
          className="px-3 py-1 hidden md:block text-[16px] font-semibold border-2 border-[var(--btn-color)] rounded-lg text-[var(--btn-color)] outline-none flex-center hover:text-white cursor-pointer hover:border-amber-200 transition-colors duration-150">
          Use App
        </button>
        <button
          className="px-1 md:px-6 py-px md:py-2 text-sm font-semibold md:text-sm border-2 border-[var(--btn-color)] rounded-lg bg-[var(--btn-color)] text-white outline-none flex-center uppercase hover:scale-105 transition-transform duration-100 cursor-pointer"
        >Sign In</button>
      </div>
    </header>
  );
};

export default Header;
