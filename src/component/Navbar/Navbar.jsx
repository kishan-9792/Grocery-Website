import React, { useState, useEffect } from 'react'
import { GoHeartFill } from "react-icons/go";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { TbMenu2, TbMenu3 } from "react-icons/tb";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            // ✅ cleanup
            window.removeEventListener("scroll", handleScroll);
            return()=>  window.removeEventListener('scroll',handleScroll)
        };
    }, []);

    return (
        <header
            className={`bg-white fixed top-0 right-0 left-0 z-50 transition-shadow duration-300 ${isScrolled ? "drop-shadow-[0_4px_25px_rgba(0,0,0,.9)]" : ""
                }`}
        >
            <nav className="max-w-[1400px] mx-auto px-6 md:px-10 md:h-[14vh] h-[12vh] flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="text-3xl font-bold">
                    Gr<span className="text-orange-500 uppercase">o</span>cift
                </a>

                {/* Desktop Menu */}
                <ul className="md:flex items-center gap-x-10 hidden">
                    <li>
                        <a
                            href="#"
                            className="font-semibold tracking-wider text-orange-500"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
                        >
                            Process
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>

                {/* Nav Actions */}
                <div className="flex items-center gap-x-5">
                    {/* Search Input (desktop only) */}
                    <div className="md:flex p-1 border-2 border-orange-500 rounded-full hidden">
                        <input
                            type="text"
                            name="text"
                            id="text"
                            placeholder="Search..."
                            autoComplete="off"
                            className="flex-1 h-[5vh] px-3 focus:outline-none"
                        />
                        <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
                            <IoIosSearch />
                        </button>
                    </div>

                    <a href="#" className="text-zinc-800 text-2xl">
                        <GoHeartFill />
                    </a>
                    <a href="#" className="text-zinc-800 text-2xl">
                        <HiMiniShoppingBag />
                    </a>

                    {/* Hamburger */}
                    <button
                        className="text-zinc-800 text-3xl md:hidden"
                        onClick={toggleMenu}
                    >
                        {showMenu ? <TbMenu3 /> : <TbMenu2 />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <ul
                    className={`flex flex-col gap-y-6 rounded-lg bg-gray-100 shadow-xl md:hidden absolute top-[12vh] left-0 w-full items-center py-6 transition-transform duration-500 ${showMenu ? "translate-x-0" : "-translate-x-full"
                        }`}
                >
                    <li>
                        <a
                            href="#"
                            className="font-semibold tracking-wider text-orange-500"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
                        >
                            Process
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
                        >
                            Contact Us
                        </a>
                    </li>
                    {/* Mobile search */}
                    <li className="flex p-1 border-2 border-orange-500 rounded-full w-3/4">
                        <input
                            type="text"
                            name="text"
                            id="text"
                            placeholder="Search..."
                            autoComplete="off"
                            className="flex-1 h-[5vh] px-3 focus:outline-none"
                        />
                        <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
                            <IoIosSearch />
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
