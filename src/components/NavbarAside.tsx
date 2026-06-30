"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Plus as PlusIcon,
  Handbag as ShoppingCartIcon,
  Home as HomeIcon,
  UsersIcon,
  Settings as SettingsIcon,
  Truck as OrderIcon,
} from "lucide-react";

export const NavbarAside = () => {
  const userIsAdmin = true;

  return (
    <aside className="h-[95vh] flex flex-col border-r border-r-neutral border-r-neutral-300   p-2 ">
      <Link href="/">
        <div
          title="Home"
          aria-label="Inicio"
          className="group hover:bg-black -800 p-5 rounded-lg cursor-pointer"
        >
          <HomeIcon className="size-6 text-black  group-hover:text-white" />
        </div>
      </Link>

      <Link href="/cart">
        <div
          title="Carrito"
          aria-label="Cart"
          className="group hover:bg-black  -800 p-5 rounded-lg cursor-pointer"
        >
          <ShoppingCartIcon className="size-6 text-black  group-hover:text-white" />
        </div>
      </Link>

      {/* TODO: hacer que aparescan estos iconos cuando el admin entre */}

      {userIsAdmin && (
        <>
          <Link href="/create_product">
            <div
              title="Subir un producto"
              aria-label="Cart"
              className="group hover:bg-black  -800 p-5 rounded-lg cursor-pointer"
            >
              <PlusIcon className="size-6 text-black  group-hover:text-white" />
            </div>
          </Link>

          <Link href="/dashboard">
            <div
              title="Panel de administración"
              aria-label="Cart"
              className="group hover:bg-black  -800 p-5 rounded-lg cursor-pointer"
            >
              <LayoutDashboard className="size-6 text-black  group-hover:text-white" />
            </div>
          </Link>

          <Link href="/">
            <div
              title="Administrar pedidos"
              aria-label="Cart"
              className="group hover:bg-black  -800 p-5 rounded-lg cursor-pointer"
            >
              <OrderIcon className="size-6 text-black  group-hover:text-white" />
            </div>
          </Link>

          <Link href="/">
            <div
              title="Administrar usuarios"
              aria-label="Cart"
              className="group hover:bg-black  -800 p-5 rounded-lg cursor-pointer"
            >
              <UsersIcon className="size-6 text-black  group-hover:text-white" />
            </div>
          </Link>

          <div
            title="Configuración"
            aria-label="Settings"
            className="group hover:bg-black  -800 p-5 rounded-lg cursor-pointer"
          >
            <SettingsIcon className="size-6 text-black  group-hover:text-white" />
          </div>
        </>
      )}
    </aside>
  );
};
