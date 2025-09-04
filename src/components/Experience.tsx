
import { Calendar, MapPin, Briefcase, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Software Developer',
      company: 'Jay Robotix Learning Pvt Ltd, Hyderabad',
      period: 'May 2024 – Till date',
      type: 'Full-time',
      description: 'Working as a full-stack developer handling both mobile and web projects, integrating modern and legacy systems, and contributing to production-level applications.',
      achievements: [
        'Developed and maintained full-stack applications using Flutter, Node.js, and PostgreSQL',
        'Integrated Odoo ERP with custom modules for check-in/out, chat history, and team management',
        'Built Odoo ERP integrations using JSON-RPC methods for authentication, record management, and Discuss chat features, ensuring seamless interaction between external apps and Odoo backend',
        'Built secure, location-based attendance tracking system using GPS and proximity logic',
        'Worked on deploying and maintaining legacy Joomla PHP projects on AWS EC2 instances',
        'Handled app development and publishing for internal systems on Google Play Store'
      ],
      tech: ['Flutter', 'Node.js', 'PostgreSQL', 'AWS EC2', 'Odoo', 'Joomla', 'Git']
    },
    {
      id: 2,
      title: 'Software Developer Intern',
      company: '7dots Smart Solutions (OPC) Pvt Ltd., Hyderabad',
      period: 'May 2023 – Dec 2023',
      type: 'Internship',
      description: 'Contributed to the design and development of web-based event management systems as part of a collaborative team, enhancing both frontend usability and backend functionality.',
      achievements: [
        'Collaborated closely with developers and UI/UX designers to build intuitive, user-centric web applications',
        'Developed scalable and maintainable web platforms with full CRUD operations for seamless event creation and management',
        'Implemented secure user authentication and authorization workflows to protect sensitive user and event data',
        'Worked with modern frontend technologies and design tools to deliver responsive and visually appealing user interfaces'
      ],
      tech: ['Angular', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Figma']
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
      institution: 'Aditya High School, Proddatur, A.P',
      period: '2016 – 2018',
      cgpa: '10.0/10',
      university: 'Andhra Pradesh State Board'
    }
  ];

  const achievements = [
    'Internship Completion Certificate from 7dots Smart Solutions (OPC) Pvt Ltd.',
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
                  <div className="mb-4 space-y-2">
                    {/* Title and Period in same row */}
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl font-semibold text-white">
                        {exp.title}
                      </h4>
                      <div className="flex items-center gap-1 text-gray-400 text-sm">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                    </div>

                    {/* Company and Type in same row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-blue-400">
                        <MapPin size={16} />
                        <span className="text-sm">{exp.company}</span>
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
                        <li key={idx} className="text-gray-300 fs-10 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/*<div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>*/}
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
