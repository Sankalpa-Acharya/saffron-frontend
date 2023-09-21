import React from "react";
import image from '../../public/image.jpg'

const HomePage = () => {
  return (
    <div className="border-t-4 border-[#492184]">
      <header className="p-5 ">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h3 className="text-2xl">Saffron</h3>
            <span className="p-1 border border-blue-500 text-xs text-center ml-2 rounded">
              prototype
            </span>
          </div>
          <div className="flex items-center mt-1">
            <p className="mr-5 text-lg cursor-pointer">FAQ</p>
            <button className="bg-indigo-700 rounded-md px-3 py-2 shadow-lg font-bold text-center">
              Start Chat
            </button>
          </div>
        </div>
      </header>

      <main className="p-14 flex justify-center">
        <div className="mt-28 w-[80%] flex">
          <div className=" w-[50%]">
            <h1 className="text-7xl font-extrabold">Saffron</h1>
            <p className="mt-3  text-2xl font-mono font-medium">A conversational AI tool <br/> by Saffron</p>
            <p className="w-[50%] mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque pariatur libero Lorem, ipsum.</p>
            <button className="mt-5 p-2 px-3 rounded-xl bg-indigo-700">Start Chat</button>
          </div>

            <div className=" w-[50%]">
                <div className="relative bottom-20">
                <img src={image} className="rounded-xl" alt="" />
                <div className=" flex justify-end relative left-4 bottom-4">
                    <div className="bg-[#191919] flex items-center text-white rounded-2xl px-3 py-4">
                    <p className="px-2 py-1 mr-4 rounded-full  bg-gray-600">
                    🌿
                    </p>
                    <p className="font-medium">
                    Hello! How can I assist you today ?
                    </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
