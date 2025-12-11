import { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const technologies = [
    { name: 'React.js', icon: '⚛️' },
    { name: 'Angular', icon: '🅰️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Express.js', icon: '⚡' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'SCSS', icon: '💅' },
    { name: 'Git & GitHub', icon: '🐙' },
    { name: 'REST APIs', icon: '🔗' },
    { name: 'JWT Auth', icon: '🔐' },
    { name: 'Responsive Design', icon: '📱' },
    { name: 'Vite', icon: '⚡' },
    { name: 'Vercel', icon: '▲' },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-6 w-full bg-[var(--bg-secondary)]/50" style={{marginTop: '150px'}}>
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-title">Technologies I Use</h2>
          <p className="text-[var(--text-secondary)] mt-6 max-w-2xl mx-auto" style={{textAlign: 'center'}}>
            Here are the technologies and tools I work with to build modern web applications.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className={`tech-badge flex items-center gap-2 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <span>{tech.icon}</span>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
