import React from "react";

export default function Header() {
  return (
    <div>
      <ul className=" h-[100px] flex flex-row gap-3 items-center w-full p-4">
        <li>
          <a href="/" className="text-xl">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="text-xl">
            About
          </a>
        </li>
      </ul>
    </div>
  );
}
