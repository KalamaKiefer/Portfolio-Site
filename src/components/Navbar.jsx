import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import Bounded from "./Bounded";
import clsx from "clsx";
import * as Popover from "@radix-ui/react-popover";
import {
  Bars3BottomLeftIcon,
  XMarkIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/kk.png";

const MobileNav = () => {
  return (
    <Popover.Root>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Popover.Trigger asChild>
          <button className="w-7 h-7 inline-flex items-center justify-center text-matte">
            <Bars3BottomLeftIcon />
          </button>
        </Popover.Trigger>
        <Popover.Anchor />
      </div>

      <Popover.Portal>
        <Popover.Content className="will-change-[transform,opacity] data-[state=open]:data-[side=bottom]:animate-slideDownAndFade">
          <div className="w-screen h-[200px] -mt-11 bg-gradient-to-b from-[#E5FFFF] to-[#C2D0FF] flex flex-col items-center justify-center space-y-4 relative">
            <Popover.Close>
              <button className="w-7 h-7 inline-flex items-center justify-center text-matte absolute top-6 right-6">
                <XMarkIcon />
              </button>
            </Popover.Close>

            {navLinks.map((link) => (
              <Popover.Close key={link.id}>
                <a
                  href={clsx("#", link.id)}
                  className="text-matte text-lg font-medium cursor-pointer"
                >
                  {link.title}
                </a>
              </Popover.Close>
            ))}
          </div>

          <Popover.Arrow />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

const Navbar = () => {
  const [active, setActive] = React.useState("");

  return (
    <Bounded
      xPad="default"
      className="w-full flex items-center py-5 fixed top-0 z-20 bg-gradient-to-r from-[#E5FFFF] to-[#C2D0FF]"
    >
      <nav className="contents">
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img className="w-10 h-10 object-contain" src={logo} />
            <p className="text-matte font-bold cursor-pointer text-xl">
              Kalama Kiefer
            </p>
          </Link>
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={clsx(
                  active === link.title
                    ? "animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent"
                    : "text-matte",
                  "hover:animate-text hover:bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 hover:bg-clip-text hover:text-transparent text-xl font-medium cursor-pointer duration-200 ease-in-out transition"
                )}
                onClick={() => setActive(link.title)}
              >
                <a href={clsx("#", link.id)}>{link.title}</a>
              </li>
            ))}
          </ul>

          <MobileNav />
        </div>
      </nav>
    </Bounded>
  );
};

export default Navbar;
