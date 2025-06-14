
import { User, Award, Calendar, MapPin, Mail } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Calendar, label: 'Experience', value: '2+ Years' },
    { icon: Award, label: 'CGPA', value: '8.13/10' },
    { icon: User, label: 'Projects', value: '10+' },
    { icon: MapPin, label: 'Location', value: 'Hyderabad' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Software Development Engineer
              </h3>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a passionate Full Stack Developer with expertise in the MERN stack and mobile application development. 
                Currently working at Oscar IT Solutions, where I develop scalable web applications and contribute to 
                innovative projects.
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                With a strong foundation in Computer Science and Engineering from Sri Venkateswara College of Engineering, 
                I bring both theoretical knowledge and practical experience to every project I work on.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-blue-400" size={20} />
                  <span className="text-gray-300">ranga.sreevijay768@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-blue-400" size={20} />
                  <span className="text-gray-300">Hyderabad, Telangana</span>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="glass-card p-6 text-center hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <stat.icon className="mx-auto mb-4 text-blue-400" size={32} />
                  <div className="text-2xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 glass-card p-6">
              <h4 className="text-xl font-semibold mb-4 text-white">
                Core Competencies
              </h4>
              <div className="space-y-3">
                {[
                  'MERN Full-Stack Development',
                  'Mobile Application Development', 
                  'Responsive Web Design',
                  'Database Management',
                  'Project Management'
                ].map((competency, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">{competency}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
