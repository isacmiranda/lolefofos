import { useState } from "react";
import logo from "../assets/logo.jpg";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-pink-300 text-gray-900 shadow-md py-3">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">

        {/* Logo + Nome */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-yellow-500 shadow-sm"
          />
          <h1 className="text-xl md:text-2xl font-bold tracking-wide">
            LofeFofos Papelaria
          </h1>
        </div>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-6 text-lg font-medium">
          <a className="hover:text-yellow-600 transition" href="/">Home</a>
          <a className="hover:text-yellow-600 transition" href="/produtos">Produtos</a>
          <a className="hover:text-yellow-600 transition" href="/contato">Contato</a>
        </nav>

        {/* Botão mobile */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
        >
          <div className="space-y-1">
            <span className="block w-6 h-1 bg-gray-900"></span>
            <span className="block w-6 h-1 bg-gray-900"></span>
            <span className="block w-6 h-1 bg-gray-900"></span>
          </div>
        </button>

      </div>

      {/* Menu Mobile (abre e fecha) */}
      {open && (
        <nav className="md:hidden bg-pink-200 text-gray-900 flex flex-col gap-4 p-4 text-lg shadow-inner">
          <a href="/" className="hover:text-yellow-500">Home</a>
          <a href="/produtos" className="hover:text-yellow-500">Produtos</a>
          <a href="/contato" className="hover:text-yellow-500">Contato</a>
        </nav>
      )}
    </header>
  );
}
