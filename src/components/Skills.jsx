const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Angular', level: 85 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'SCSS/CSS', level: 88 },
        { name: 'JavaScript', level: 92 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Express.js', level: 85 },
        { name: 'MongoDB', level: 82 },
        { name: 'REST APIs', level: 90 },
        { name: 'JWT Auth', level: 85 },
        { name: 'Mongoose', level: 80 },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', level: 88 },
        { name: 'VS Code', level: 95 },
        { name: 'Vercel', level: 85 },
        { name: 'Postman', level: 88 },
        { name: 'npm/yarn', level: 90 },
        { name: 'Docker', level: 70 },
      ]
    }
  ]

  return (
    <section id="skills" className="py-28 px-8 w-full">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] mx-auto rounded-full"></div>
          <p className="text-[var(--text-secondary)] mt-4 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to build modern web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {skillCategories.map((category) => (
            <div 
              key={category.title}
              className="p-8 bg-[var(--bg-card)] rounded-2xl border border-[var(--border-color)] hover:border-[var(--primary)]/50 transition-all"
            >
              <h3 className="text-xl font-semibold mb-8 text-center text-[var(--primary)]">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-[var(--text-secondary)]">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-[var(--bg-secondary)] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
