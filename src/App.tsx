import  { useState } from "react";

export default function App() {
  const [showLove, setShowLove] = useState(false);
  const [noSize, setNoSize] = useState(1);

  const handleNo = () => {
    setNoSize((prev) => prev + 0.3);
  };

  const handleYes = () => {
    setShowLove(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 text-center">
      {!showLove ? (
        <>
          <h1 className="text-3xl font-bold mb-8 text-pink-700">
            Beni seviyor musun? 💘
          </h1>
          <div className="flex gap-6">
            <button
              onClick={handleYes}
              style={{ transform: `scale(${noSize})` }}
              className="bg-pink-500 text-white px-6 py-3 rounded-2xl text-lg hover:bg-pink-600 transition"
            >
              Evet 💕
            </button>
            <button
              onClick={handleNo}
              
              className="bg-gray-400 text-white px-6 py-3 rounded-2xl text-lg hover:bg-gray-500 transition"
            >
              Hayır 😒
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <img
            src="/love1.gif"
            alt="love gif"
            className="w-64 h-64 mb-6 rounded-2xl shadow-lg"
          />
          <h2 className="text-2xl text-pink-700 font-semibold">
            Ben de seni seviyorum💖
          </h2>
        </div>
      )}
    </div>
  );
}
