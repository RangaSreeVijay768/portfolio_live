
import { useState, useEffect, useRef } from 'react';
import { Code, Database, Terminal, Zap } from 'lucide-react';

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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      skills: [
        { name: 'ReactJS', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 88 },
        { name: 'TypeScript', level: 80 },
        { name: 'Bootstrap', level: 85 },
        { name: 'Tailwind CSS', level: 82 }
      ]
    },
    {
      title: 'Backend Development',
      icon: Terminal,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 88 },
        { name: 'Python', level: 75 },
        { name: 'REST APIs', level: 90 },
        { name: 'JWT Auth', level: 85 }
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      skills: [
        { name: 'MongoDB', level: 88 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MySQL', level: 78 },
        { name: 'Firebase', level: 85 }
      ]
    },
    {
      title: 'Mobile & Tools',
      icon: Zap,
      skills: [
        { name: 'Flutter', level: 85 },
        { name: 'Dart', level: 82 },
        { name: 'Git', level: 90 },
        { name: 'AWS', level: 70 },
        { name: 'Docker', level: 65 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="glass-card p-6 hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="text-center mb-6">
                <category.icon className="mx-auto mb-4 text-blue-400" size={40} />
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 text-sm">{skill.name}</span>
                      <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className={`skill-progress ${isVisible ? 'w-full' : 'w-0'}`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-white">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Angular', 'Vue.js', 'Next.js', 'GraphQL', 'Redux', 'Jest', 
              'Webpack', 'Sass', 'Figma', 'Postman', 'Linux', 'Nginx'
            ].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 glass-card text-sm text-gray-300 hover:text-white hover:scale-110 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
