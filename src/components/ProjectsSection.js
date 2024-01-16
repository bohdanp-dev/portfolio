import ProjectCard from './ProjectCard';

//change placeholders for data
const projectsData = [
    {
        id: 1,
        title: 'Pomodoro application',
        description:
            ' Pomodoro Timer App, a simple yet effective tool designed to enhance focus and efficiency. As a training project, it features work and break modes with customizable timers, coupled with a basic to-do list.',
        image: '/images/projectsImg/pomodoro.png',
        gitUrl: 'https://placeholder',
        deployUrl: 'https://placeholder',
    },
    {
        id: 2,
        title: 'Personal Portfolio',
        description: 'A personal portfolio website showcasing my skills and projects. It serves as a hub for my work as a React developer, offering insights into my expertise in frontend technologies and project accomplishments.',
        image: '/images/projectsImg/portfolio.png',
        gitUrl: 'https://placeholder',
        deployUrl: 'https://placeholder',
    },
    /*{
      id: 3,
      title: 'Quote Generator',
      description:
        'Using a public API, Quote Generator randomly selects and presents a new quote. The website features a minimalist and user-friendly design, allowing users to easily navigate and enjoy a moment of reflection',
      image: 'https://placeholder',
      gitUrl: 'https://placeholder',
      deployUrl: 'https://placeholder',
    },*/
];

const ProjectsSection = () => {

    return (
        <section id='projects' className='pt-24 -mt-24'>
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4">
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
