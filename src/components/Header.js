
const Header = ({ onPlaySnake, onPlayTank }) => (
  <div className="bg-white h-16 text-black z-[9999] font-bold border-b-2 border-slate-200 fixed w-full">
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
        <button
          onClick={onPlaySnake}
          className="hidden md:block px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 mr-5"
        >
          🕹️ Play Snake
        </button>
        <button
          onClick={onPlayTank}
          className="hidden md:block px-3 py-1 bg-pink-600 text-white rounded hover:bg-pink-700"
        >
          🕹️ Play Tank
        </button>
      </div>
    </div>
  </div>
);

export default Header;
