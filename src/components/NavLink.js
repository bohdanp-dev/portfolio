import Link from 'next/link';
const NavLink = ({ href, title, onClick }) => {
    return (
        <Link
            href={href}
            className="block py-2 pl-3 pr-4 text-[#8ecae6] sm:text-xl rounded md:p0 hover:text-white"
            onClick={onClick}
        >
            {title}
        </Link>
    );
};

export default NavLink;
