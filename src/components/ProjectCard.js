import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const ProjectCard = ({ imgUrl, title, description, gitUrl, deployUrl }) => {
    return (
        <div>
            <div
                className="h-52 md:h-72 rounded-t-xl relative group border-2 border-[var(--text-color-primary)]"
                style={{ background: `url(${imgUrl}) no-repeat center center`, backgroundSize: 'cover'  }}
            >
                    <div className="mobile-hover-card rounded-t-md  items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818]  bg-opacity-0 hidden  group-hover:flex betterhover:group-hover:bg-opacity-15">
                    <Link
                        href={gitUrl}
                        target="_blank"
                        className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#e33211] betterhover:hover:border-white group/link"
                    >
                        <CodeBracketIcon className="h-10 w-10 text-[#e33211]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer betterhover:group-hover/link:text-white" />
                    </Link>

                    <Link
                        href={deployUrl}
                        target="_blank"
                        className="h-14 w-14 border-2 relative rounded-full border-[#e33211] betterhover:hover:border-white group/link"
                    >
                        <EyeIcon className="h-10 w-10 text-[#e33211]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer betterhover:group-hover/link:text-white" />
                    </Link>
                </div>
            </div>
            <div className="text-[var(--text-color-primary)] rounded-b-xl h-full mt-3 py-0.5 px-0.5 gradient-bg-to-br-1">
                <div className="rounded-b-xl py-6 px-4 w-full bg-[var(--background-color)]">
                    <h5 className="font-xl font-semibold mb-2">{title}</h5>
                    <p style={{ minHeight: '120px' }} className="text-[var(--text-color-secondary)]">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
