import { Play, Rewind, FastForward } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="p-6 sm:p-0 container mx-auto max-w-screen min-h-screen">
      <div className="flex flex-col items-center mb-4">
        <h1 className="text-white text-lg">Product Card</h1>
        <p className="text-gray-400">
          Code challenge by rocketseat, build using nextjs 13 and tailwindcss
        </p>
      </div>
      <div className="w-full rounded-md bg-[#D9CDF7] py-32">
        <div className="flex items-center justify-center">
          <Image
            src="/projects/product-card/product.png"
            alt="Picture of the author"
            width={500}
            height={500}
          />
          <div className="flex flex-col gap-4 ">
            <p className="text-xs uppercase text-purple-950">Codigo: 424032</p>
            <p className="text-3xl font-bold font-serif text-purple-950">
              Sofá Margot II - Rosé
            </p>
            <p className="text-lg text-purple-950 opacity-70">R$ 4.000</p>
            <button className="border border-purple-950 rounded-full p-2 uppercase hover:bg-slate-100 transition-all">
              <p className="text-purple-950">Adicionar à cesta</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
