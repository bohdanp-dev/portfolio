import Link from 'next/link';
const NavLink = ({ href, title, onClick }) => {
    return (
        <Link
            href={href}
            className="block py-2 pl-3 pr-4 text-[var(--text-color-secondary)] sm:text-xl rounded md:p0 betterhover:hover:text-[var(--text-color-primary)]"
            onClick={onClick}
        >
            {title}
        </Link>
    );
};

export default NavLink;
