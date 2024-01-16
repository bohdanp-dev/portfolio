import NavLink from './NavLink';

const DropdownList = ({ links, setIsNavbarOpen }) => {
    return (
        <ul className="flex flex-col py-4 items-center">
            {links.map((link, index) => (
                <li
                    key={index}
                >
                    <NavLink href={link.path} title={link.title} onClick={()=>setIsNavbarOpen(false)}/>
                </li>
            ))}
        </ul>
    );
};

export default DropdownList;
