"use client";
import useAuthModalState from "@/zustan/useAuthModalState";
import { Search as SearchIcon } from "lucide-react";
import Link from "next/link";
import { AuthModal } from "./AuthModal";

export const Header = () => {
  const { isAuthModalActive, toggleAuthModal } = useAuthModalState();

  return (
    <>
      <header className="w-full h-16 flex col-span-2 border-b border-neutral-300 ">
        <Link href="/">
          <div className=" min-w-[20%]">
            <div className="border-r  border-neutral-300  p-3.5">
              <h1 className="text-3xl ">Narugak</h1>
            </div>
          </div>
        </Link>
        <nav className=" px-10 py-2 flex-1">
          <div className="flex gap-10">
            <form className="flex gap-3 border border-neutral-400 py-1 items-center px-4 flex-1 ">
              <SearchIcon className="size-6 text-neutral-400 " />
              <input
                type="text"
                placeholder="Busca algo aquí..."
                className="w-full outline-none border-none bg-none h-full "
              />
            </form>
            <button
              onClick={() => toggleAuthModal(!isAuthModalActive)}
              className="py-2 px-4 border border-neutral-600 hover:bg-black hover:text-white"
            >
              Iniciar sesión
            </button>
          </div>
        </nav>
      </header>
      {isAuthModalActive && (
        <AuthModal onClose={() => toggleAuthModal(false)} />
      )}
    </>
  );
};
