import {
  hedge,
  hcd,
  mycr
} from "../assets/index";

const FavoriteBands = () => {
  const bands = [
    { 
      name: "刺猬", 
      img: hedge,
      url: "https://www.youtube.com/watch?v=Nzvj0cNg-3U" 
    },
    { 
      name: "回春丹", 
      img: hcd,
      url: "https://www.youtube.com/watch?v=HFILwnVvH2o"
    },
    { 
      name: "麻园诗人", 
      img: mycr,
      url: "https://www.youtube.com/watch?v=7u6W9rrrozc" 
    }
  ];

  return (
    <div id="favorite-bands" className="scroll-mt-20 mt-5">
      <div className="text-blue-800 text-xl font-bold mb-4">🎸 My Favorite Bands</div>

      <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
        {bands.map((band, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-2/3 md:w-1/4"
          >
            {/* 图片可点击跳转 */}
            <a 
              href={band.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full"
            >
              <img
                src={band.img}
                alt={band.name}
                className="rounded-xl shadow-md border border-gray-200 
                           hover:scale-105 hover:brightness-110 
                           transition-transform duration-300 ease-in-out"
              />
            </a>
            <div className="mt-2 text-gray-700 font-medium text-center">{band.name}</div>
          </div>
        ))}
      </div>
      <div className="mt-2 text-sm text-gray-500 italic text-center">
        “Music fuels creativity 🎧”
      </div>
    </div>
  );
};

export default FavoriteBands;
