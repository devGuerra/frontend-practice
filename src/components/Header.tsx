import Link from "next/link";

export function Header() {
  return (
    <header className="bg-neutral-900 text-white border-b-1 border-neutral-700">
      <div className="container mx-auto h-14 flex">
        <ul className="flex">
          <li className="">
            <Link href="/" className="flex h-full items-center">
              Home
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
