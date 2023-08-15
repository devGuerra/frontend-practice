import { Play, Rewind, FastForward } from "lucide-react";

export default function Page() {
  return (
    <div className="p-6 sm:p-0 container mx-auto  max-w-screen justify-center items-center flex flex-col gap-12">
      <div className="flex flex-col items-center">
        <h1 className="text-white text-lg">Player Music</h1>
        <p className="text-gray-400">
          Code challenge by rocketseat, build using nextjs 13 and tailwindcss
        </p>
      </div>

      <div className="flex gap-8 flex-col lg:flex-row">
        <div className="bg-[#2A2141] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer rounded-lg p-9 flex flex-col gap-7">
          <img src="/player-image.png" alt="player image" />
          <div>
            <h2 className="text-white text-xl font-bold">Acorda Devinho</h2>
            <span className="text-gray-400 text-md">Banda Rocketseat</span>
          </div>
          <div className="flex w-full justify-between">
            <Rewind
              size={24}
              color="white"
              fill="white"
              className="cursor-pointer"
            />
            <Play
              size={24}
              color="white"
              fill="white"
              className="cursor-pointer"
            />
            <FastForward
              size={24}
              color="white"
              fill="white"
              className="cursor-pointer"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="h-1 w-full bg-gray-600 rounded-lg overflow-hidden">
              <div className="h-1 w-2/3 bg-gray-100"></div>
            </div>

            <div className="flex justify-between ">
              <span className="text-gray-400 text-xs">3:20</span>
              <span className="text-gray-400 text-xs">00:12</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="bg-[#2A2141] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer rounded-lg p-7 gap-7 flex flex-col">
            <div className="flex gap-7">
              <img
                src="/player-image.png"
                alt="player image"
                className="w-20 h-20"
              />

              <div className="flex flex-col justify-center">
                <h2 className="text-white text-xl font-bold">Acorda Devinho</h2>
                <span className="text-gray-400 text-md">Banda Rocketseat</span>
              </div>
            </div>

            <div className="flex w-full justify-evenly">
              <Rewind
                size={24}
                color="white"
                fill="white"
                className="cursor-pointer"
              />
              <Play
                size={24}
                color="white"
                fill="white"
                className="cursor-pointer"
              />
              <FastForward
                size={24}
                color="white"
                fill="white"
                className="cursor-pointer"
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="h-1 w-full bg-gray-600 rounded-lg overflow-hidden">
                <div className="h-1 w-2/3 bg-gray-100"></div>
              </div>

              <div className="flex justify-between ">
                <span className="text-gray-400 text-xs">3:20</span>
                <span className="text-gray-400 text-xs">00:12</span>
              </div>
            </div>
          </div>

          <div className="bg-[#2A2141] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer rounded-lg p-7 gap-7 flex flex-col">
            <div className="flex gap-7">
              <img
                src="/player-image.png"
                alt="player image"
                className="w-20 h-20"
              />

              <div className="flex flex-col justify-center">
                <h2 className="text-white text-xl font-bold">Acorda Devinho</h2>
                <span className="text-gray-400 text-md">Banda Rocketseat</span>
              </div>
            </div>
            <div className="flex w-full justify-evenly">
              <Rewind
                size={24}
                color="white"
                fill="white"
                className="cursor-pointer"
              />
              <Play
                size={24}
                color="white"
                fill="white"
                className="cursor-pointer"
              />
              <FastForward
                size={24}
                color="white"
                fill="white"
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
