import { useEffect, useRef, useState } from 'react';

const About = () => {
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

  return (
    <section id="about" ref={sectionRef} className="py-40 px-6 w-full">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 section-title">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Avatar */}
          <div className={`flex justify-center lg:justify-start transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative group">
              {/* Main image container */}
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl bg-gradient-to-br from-purple-500/20 via-cyan-500/10 to-pink-500/20 border border-[var(--border-color)] overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-[var(--bg-secondary)]/50">
                  <span className="text-6xl md:text-7xl group-hover:scale-110 transition-transform duration-500">👨‍💻</span>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xs font-semibold shadow-lg">
                1+ Year Exp
              </div>
              <div className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-lg glass-card text-xs font-medium flex items-center gap-1.5">
                <span className="text-base">🎓</span> ITI Graduate
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              A passionate developer from{' '}
              <span className="gradient-text">Egypt</span> 🇪🇬
            </h3>
            
            <div className="space-y-4 text-[var(--text-secondary)] text-lg leading-relaxed mb-8">
              <p>
                I'm a Full Stack Developer currently studying at <span className="text-[var(--text-primary)] font-medium">ITI (Information Technology Institute)</span>. 
                I specialize in building modern, responsive web applications using cutting-edge technologies.
              </p>
              <p>
                I focus on writing <span className="text-[var(--primary)]">scalable code</span>, creating 
                smooth user experiences, and delivering polished digital products.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="glass-card p-5 rounded-2xl text-center group">
                <p className="text-3xl md:text-4xl font-bold gradient-text mb-1 group-hover:scale-110 transition-transform">4+</p>
                <p className="text-[var(--text-muted)] text-sm">Projects</p>
              </div>
              <div className="glass-card p-5 rounded-2xl text-center group">
                <p className="text-3xl md:text-4xl font-bold gradient-text mb-1 group-hover:scale-110 transition-transform">10+</p>
                <p className="text-[var(--text-muted)] text-sm">Technologies</p>
              </div>
              <div className="glass-card p-5 rounded-2xl text-center group">
                <p className="text-3xl md:text-4xl font-bold gradient-text mb-1 group-hover:scale-110 transition-transform">100%</p>
                <p className="text-[var(--text-muted)] text-sm">Dedication</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
