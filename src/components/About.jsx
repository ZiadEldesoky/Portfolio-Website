const About = () => {
  return (
    <section id="about" className="py-28 px-8 w-full bg-[var(--bg-secondary)]">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Avatar */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] p-1">
                <div className="w-full h-full rounded-2xl bg-[var(--bg-card)] flex items-center justify-center">
                  <span className="text-7xl md:text-8xl">👨‍💻</span>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[var(--primary)]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[var(--accent)]/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              A passionate developer from Egypt 🇪🇬
            </h3>
            <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
              I'm a Full Stack Developer currently studying at ITI (Information Technology Institute). 
              I specialize in building modern, responsive web applications using cutting-edge technologies 
              like React, Angular, Node.js, and MongoDB.
            </p>
            <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
              I'm passionate about creating clean, efficient code and delivering exceptional user experiences. 
              When I'm not coding, you can find me exploring new technologies and contributing to open-source projects.
            </p>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)]">
                <p className="text-[var(--primary)] font-semibold text-2xl">4+</p>
                <p className="text-[var(--text-secondary)] text-sm">Projects Completed</p>
              </div>
              <div className="p-4 bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)]">
                <p className="text-[var(--primary)] font-semibold text-2xl">10+</p>
                <p className="text-[var(--text-secondary)] text-sm">Technologies Used</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
