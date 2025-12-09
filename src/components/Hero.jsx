const Hero = () => {
  const socialLinks = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/ZiadEldesoky',
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/ziad-eldesoky-68a4831b7/',
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    { 
      name: 'Twitter', 
      url: 'https://x.com/100_zeyad',
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    { 
      name: 'Email', 
      url: 'mailto:zeyad.eldesoky@gmail.com',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
  ]

  return (
    <section id="home" className="min-h-screen w-full flex items-center justify-center pt-20 pb-24 px-8">
      <div className="w-full max-w-5xl mx-auto text-center">
        {/* Greeting */}
        <p className="text-[var(--primary)] font-semibold text-lg mb-6 tracking-wide">
          Hello, I'm
        </p>
        
        {/* Name */}
        <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] bg-clip-text text-transparent leading-tight">
          Ziad Eldesoky
        </h1>
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl text-[var(--text-secondary)] mb-10 font-light">
          Full Stack Developer
        </h2>
        
        {/* Description */}
        <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-20 leading-relaxed">
          Passionate about building modern web applications with clean code and great user experiences. 
          Specializing in React, Angular, Node.js, and the MERN/MEAN stack.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="#projects" 
            className="px-10 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-[var(--primary)]/30 transition-all hover:-translate-y-1"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="px-10 py-4 border-2 border-[var(--primary)] text-[var(--primary)] rounded-full font-semibold text-lg hover:bg-[var(--primary)] hover:text-white transition-all"
          >
            Contact Me
          </a>
        </div>
        
        {/* Separator */}
        <div className="mt-16 mb-10 flex items-center justify-center gap-4">
          <div className="w-16 h-px bg-[var(--border-color)]"></div>
          <span className="text-sm text-[var(--text-secondary)]">Find me on</span>
          <div className="w-16 h-px bg-[var(--border-color)]"></div>
        </div>
        
        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-all hover:-translate-y-2 p-4 rounded-xl hover:bg-[var(--primary)]/10 border border-transparent hover:border-[var(--primary)]/30"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
        
        {/* Scroll indicator */}
        <div className="mt-24 animate-bounce">
          <svg className="w-8 h-8 text-[var(--text-secondary)] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero
