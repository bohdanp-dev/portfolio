'use client';
import Link from 'next/link';
import { useState } from 'react';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import DropdownList from './DropdownList';
import { AnimatePresence, motion } from 'framer-motion';
import {HEADER_NAVLINK_ABOUT, HEADER_NAVLINK_CONTACT, HEADER_NAVLINK_PROJECTS} from "@/constants/textConsts";


const navLinks = [
    {
        title: HEADER_NAVLINK_ABOUT,
        path: '#about',
    },
    {
        title: HEADER_NAVLINK_PROJECTS,
        path: '#projects',
    },
    {
        title: HEADER_NAVLINK_CONTACT,
        path: '#contact',
    },
];

const Header = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const dropdownVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: {
            opacity: 1,
            height: "auto",
            transition: {
                opacity: {duration: 0.5},
                height: { duration: 0.3 },
            }
        }
    };


    return (
        <>
            <div id="top" className={"flex flex-col w-full fixed mx-auto top-0 left-0 right-0 z-10"}>
                <div className={"h-1 w-full gradient-bg-to-r-1"}></div>
                <nav className="border border-b-[#ffffff] border-l-transparent border-r-transparent border-t-transparent bg-black bg-opacity-100">
                    <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                        <Link
                            href={'#top'}
                            className="text-2xl md:text-5xl text-white font-semibold"
                        >
                            <p className="text-4xl sm:text-3xl lg:text-4xl lg:leading-normal font-extrabold">
                  <span className="text-white bg-clip-text gradient-bg-to-r-1">
                    B. P.
                  </span>
                            </p>
                        </Link>
                        {/* Mobile Menu button (md- devices)*/}
                        <div className="mobile-menu block md:hidden">
                            {!isNavbarOpen ? (
                                <button
                                    onClick={() => setIsNavbarOpen(true)}
                                    className="flex items-center px-3 py-2 border rounded border-slate-200  text-slate-200 hover:text-white hover:border-white"
                                >
                                    <Bars3Icon className="h-5 w-5" />
                                </button>
                            ) : (
                                <button
                                    onClick={() => setIsNavbarOpen(false)}
                                    className="flex items-center px-3 py-2 border rounded border-slate-200  text-slate-200 hover:text-white hover:border-white"
                                >
                                    <XMarkIcon className="h-5 w-5" />
                                </button>
                            )}
                        </div>
                        {/* md+ devices menu */}
                        <div className="menu hidden md:block md:w-auto" id="navbar">
                            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                                {navLinks.map((link, index) => (
                                    <motion.li whileHover={{ scale: 1.1 }} key={index}>
                                        <NavLink href={link.path} title={link.title} />
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/*
              mobile menu content
              Shown after the div flex:row
            */}
                    <AnimatePresence>
                        {isNavbarOpen && (
                            <motion.div
                                className="overflow-hidden"
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={dropdownVariants}
                            >
                                <DropdownList setIsNavbarOpen={setIsNavbarOpen} links={navLinks} />
                            </motion.div>
                        )}
                    </AnimatePresence>

                </nav>
            </div>

        </>
    );
};

export default Header;
