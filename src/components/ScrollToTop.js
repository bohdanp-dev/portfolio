'use client';
import {useEffect, useState} from 'react';
import {ArrowUpCircleIcon} from "@heroicons/react/24/solid";
import Link from "next/link";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () =>
            window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return isVisible ? (
        <div className="fixed w-12 bottom-8 right-4 md:right-16 bg-transparent">

            <Link
                href="#top"
            >
                <ArrowUpCircleIcon className="text-[var(--text-color-primary)]"/>
            </Link>
        </div>
    ) : null;
};

export default ScrollToTop;
