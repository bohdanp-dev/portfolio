import ProjectCard from './ProjectCard';
import {
    PROJECTS_BLOG_APP_DESCRIPTION,
    PROJECTS_POMODORO_DESCRIPTION,
    PROJECTS_PORTFOLIO_DESCRIPTION,
    PROJECTS_QUOTES_DESCRIPTION
} from "@/utils/textConsts";

//change placeholders for data
const projectsData = [
    {
        id: 1,
        title: 'Pomodoro application',
        description: PROJECTS_POMODORO_DESCRIPTION,
        image: '/images/projectsImg/pomodoro.png',
        gitUrl: 'https://github.com/bohdanp-dev/pomodorotracker',
        deployUrl: 'https://pomodoro-bohdanp.vercel.app',
    },
    {
        id: 2,
        title: 'Personal Portfolio',
        description: PROJECTS_PORTFOLIO_DESCRIPTION,
        image: '/images/projectsImg/portfolio.png',
        gitUrl: 'https://placeholder',
        deployUrl: 'https://placeholder',
    },
    {
      id: 3,
      title: 'Quote Generator',
      description: PROJECTS_QUOTES_DESCRIPTION,
      image: '/images/projectsImg/quotes.png',
      gitUrl: 'https://github.com/bohdanp-dev/quote-generator',
      deployUrl: 'https://quotes-bohdanp.vercel.app',
    },
    {
        id: 4,
        title: 'Blog application',
        description: PROJECTS_BLOG_APP_DESCRIPTION,
        image: '/images/projectsImg/blog.png',
        gitUrl: 'https://github.com/bohdanp-dev',
        deployUrl: 'https://github.com/bohdanp-dev',
    },
];

const ProjectsSection = () => {

    return (
        <section id='projects' className='pt-24 -mt-24'>
            <h2 className="text-center text-4xl font-bold text-[var(--text-color-primary)] mt-4 mb-4">
                My Projects
            </h2>
            <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
                {projectsData.map((project, index) => (
                    <li
                        key={index}
                    >
                        <ProjectCard
                            key={project.id}
                            imgUrl={project.image}
                            title={project.title}
                            description={project.description}
                            gitUrl={project.gitUrl}
                            deployUrl={project.deployUrl}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectsSection;
