import { useEffect, useRef, useState } from 'react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Premium E-Commerce (Ziad Store)',
      description: 'Full-featured e-commerce platform with JWT auth, Quick View, Related Products, Recently Viewed, Coupons, PWA support, and Admin Dashboard.',
      tech: ['Angular 18', 'Node.js', 'MongoDB', 'TypeScript', 'SCSS'],
      liveUrl: 'https://angular-e-commerce-webiste.vercel.app/',
      githubUrl: 'https://github.com/ZiadEldesoky/Angular-Shop-Demo',
      gradient: 'from-purple-500/20 via-pink-500/10 to-red-500/20',
      icon: '🛒',
    },
    {
      title: 'AgriLink MVP',
      description: 'A platform connecting farmers directly with consumers, featuring real-time inventory, order management, and secure payments.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      liveUrl: '#',
      githubUrl: 'https://github.com/ZiadEldesoky',
      gradient: 'from-green-500/20 via-emerald-500/10 to-teal-500/20',
      icon: '🌾',
    },
    {
      title: 'Todo Task Manager',
      description: 'A full CRUD task management app with authentication, priority levels, and dynamic filtering. Built with React Hooks and Express APIs.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: 'https://github.com/ZiadEldesoky/Todo-Task-Manager',
      gradient: 'from-blue-500/20 via-cyan-500/10 to-teal-500/20',
      icon: '✅',
    },
    {
      title: 'Personal Portfolio',
      description: 'A fully responsive, animated personal portfolio built with React and Tailwind CSS, showcasing clean UI and fast performance.',
      tech: ['React.js', 'Vite', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/ZiadEldesoky',
      gradient: 'from-violet-500/20 via-purple-500/10 to-fuchsia-500/20',
      icon: '👨‍💻',
    },
    {
      title: 'Ziad Online Store',
      description: 'My first e-commerce project built with pure JavaScript, HTML, CSS, and SCSS. Features product catalog, shopping cart, and responsive design.',
      tech: ['JavaScript', 'HTML', 'CSS', 'SCSS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/ZiadEldesoky/Ziad-Online-Store',
      gradient: 'from-orange-500/20 via-amber-500/10 to-yellow-500/20',
      icon: '🛍️',
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-6 w-full" style={{marginTop: '150px'}}>
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 section-title">Projects</h2>
          <p className="text-[var(--text-secondary)] mt-8 max-w-2xl mx-auto text-lg" style={{textAlign: 'center'}}>
            A selection of projects I've worked on, showcasing my skills in full-stack development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group glass-card rounded-2xl overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Header/Image */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <span className="text-7xl group-hover:scale-125 transition-transform duration-500">{project.icon}</span>
                
                {/* Hover overlay with links */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      title="Live Demo"
                    >
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    title="View Code"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-[var(--primary)]/10 text-[var(--primary-light)] rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 text-xs text-[var(--text-muted)]">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className={`text-center mt-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href="https://github.com/ZiadEldesoky"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            View More on GitHub
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
