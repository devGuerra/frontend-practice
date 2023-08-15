import Image from "next/image";
import Link from "next/link";
import { challenges } from "~/data/challenges";

export default function Home() {
  return (
    <div className="container text-white mx-auto">
      <div>
        <ul className="justify-between gap-6 grid sm:grid-cols-2 lg:grid-cols-3 grid-flow-row ">
          {challenges.map((challenge, index) => (
            <Link href={challenge.path} key={index}>
              <li
                key={index}
                className="bg-neutral-800 h-full rounded-md overflow-hidden hover:shadow-lg hover:shadow-purple-700 hover:scale-105 transition-all duration-300 ease-in-out hover:cursor-pointer"
              >
                <Image
                  src={challenge.image}
                  alt={challenge.name}
                  width={400}
                  height={100}
                  className="w-full h-40 object-cover"
                />

                <div className="flex flex-col p-4 items-center">
                  <span className="font-bold text-lg">{challenge.name}</span>

                  <span className="text-sm text-gray-400 text-center">
                    {challenge.description}
                  </span>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
