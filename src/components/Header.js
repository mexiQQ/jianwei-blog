import React from "react";

const Header = () => (
  <div className="bg-white h-16 text-black font-bold border-b-2 border-slate-200 fixed w-full">
    <div className="max-w-screen-lg mx-auto px-5">
      <div className="h-16 flex flex-row flex-wrap content-center items-baseline">
        <div className="mr-5 text-xl"><a href="/">Jianwei Li</a></div>
        <div className="hidden md:block mr-5 text-sm text-black">
          <a href="#research">Research Interest</a>
        </div>
        <div className="hidden md:block mr-5 text-sm text-black">
          <a href="#news">News</a>
        </div>
        <div className="hidden md:block mr-5 text-sm text-black">
          <a href="#publications">Publications</a>
        </div>
        <div className="hidden md:block mr-5 text-sm text-black">
          <a href="#teaching">Teaching</a>
        </div>
        <div className="mr-5 text-sm text-black">
          <a target="_blank" href="https://shadow-llm.com/">Shadow LLM</a>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
