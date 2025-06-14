
import { Calendar, MapPin, Briefcase, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Software Development Engineer',
      company: 'Oscar IT Solutions, Hyderabad',
      period: 'MAY 2024 – Present',
      type: 'Full-time',
      description: 'Working at a growing software development division of a training institute, focusing on full-stack web development and project management.',
      achievements: [
        'Utilized Git for version control and integrated CI/CD pipelines for streamlined deployment',
        'Developed RESTful APIs enabling seamless communication between frontend and backend systems',
        'Integrated PostgreSQL as database, handling complex queries and optimizing performance',
        'Ensured responsive and functional applications across various devices without errors'
      ],
      tech: ['Git', 'REST APIs', 'PostgreSQL', 'CI/CD', 'Responsive Design']
    },
    {
      id: 2,
      title: 'Software Developer Intern',
      company: '7dots Smart Solutions (OPC) Pvt Ltd., Hyderabad',
      period: 'MAY 2023 – DECEMBER 2023',
      type: 'Internship',
      description: 'Gained hands-on experience in web development and event management systems during my internship period.',
      achievements: [
        'Collaborated with team of developers and designers to create user-friendly applications',
        'Developed web platform with CRUD functionalities for effortless event creation and management',
        'Implemented secure user authentication ensuring data privacy and secure platform access',
        'Used modern web technologies including Angular, HTML, CSS, JavaScript, Bootstrap, and Figma'
      ],
      tech: ['Angular', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Figma']
    }
  ];

  const education = [
    {
      degree: 'B. Tech in Computer Science & Engineering',
      institution: 'Sri Venkateswara College of Engineering, Kadapa, A.P',
      period: '2020 – 2024',
      cgpa: '8.13/10',
      university: 'JNTU, Anantapur'
    },
    {
      degree: 'Diploma in Computer Science & Engineering',
      institution: 'Government Polytechnic, Proddatur, A.P',
      period: '2017 – 2021',
      cgpa: '8.20/10',
      university: 'AP SBTET'
    },
    {
      degree: 'Secondary Education',
      institution: 'Ashoka High School, Proddatur, A.P',
      period: '2016 – 2018',
      cgpa: '10.0/10',
      university: 'Andhra Pradesh State Board'
    }
  ];

  const achievements = [
    'Innovation Certificate from 7dots Smart Solutions (OPC) Pvt Ltd.',
    'Consultant Virtual Experience Certificate from Accenture',
    '21st Century Employability Skills Certificate from Wadhwani Foundation',
    '1st Prize in Essay Writing competition at Sri Venkateswara College of Engineering',
    '1st Prize in Essay Writing on National Science Day',
    '2nd Prize in District level Quiz Competition, 8th class',
    '10/10 GPA in SSC with cash prizes and medals'
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
              <Briefcase className="text-blue-400" size={28} />
              Professional Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="glass-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">
                        {exp.title}
                      </h4>
                      <div className="flex items-center gap-2 text-blue-400 mb-2">
                        <MapPin size={16} />
                        <span className="text-sm">{exp.company}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-gray-400 text-sm mb-1">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">
                    {exp.description}
                  </p>

                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-white mb-2">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Achievements */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
              <Award className="text-purple-400" size={28} />
              Education
            </h3>
            
            <div className="space-y-6 mb-12">
              {education.map((edu, index) => (
                <div key={index} className="glass-card p-6 hover:scale-105 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {edu.degree}
                  </h4>
                  <div className="text-blue-400 mb-2">
                    {edu.institution}
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>{edu.period}</span>
                    <span className="font-semibold text-green-400">CGPA: {edu.cgpa}</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {edu.university}
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <Award className="text-yellow-400" size={28} />
              Achievements & Awards
            </h3>
            
            <div className="glass-card p-6">
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="text-gray-300 text-sm flex items-start gap-3">
                    <Award className="text-yellow-400 flex-shrink-0 mt-0.5" size={16} />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
