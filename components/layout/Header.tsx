// components/layout/Header.tsx
import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/">
          <a className="text-2xl font-bold text-blue-600">MyLogo</a>
        </Link>

        {/* Navigation & Search */}
        <nav className="flex items-center gap-6">
          <Link href="/rooms"><a className="hover:text-blue-500">Rooms</a></Link>
          <Link href="/mansion"><a className="hover:text-blue-500">Mansions</a></Link>
          <Link href="/countryside"><a className="hover:text-blue-500">Countryside</a></Link>
          {/* … add more as needed */}
          <input
            type="text"
            placeholder="Search..."
            className="ml-4 rounded border border-gray-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <button className="rounded bg-blue-500 px-4 py-1 text-white hover:bg-blue-600">
            Sign In
          </button>
          <button className="rounded border border-blue-500 px-4 py-1 text-blue-500 hover:bg-blue-50">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
