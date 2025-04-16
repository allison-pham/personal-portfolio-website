import { Calendar } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function Experience() {
  const experiences = [
    {
      title: 'UI/UX and Operations Lead',
      company: 'Citrus and Cutie Hack',
      period: 'Jul 2024 - Present',
      description: '',
    },

    {
      title: 'College of Engineering Senator',
      company: 'Associated Students of the University of California',
      period: 'May 2024 - Present',
      description: '',
    },

    {
      title: 'Project and Workshop Coordinator',
      company: 'Gamespawn',
      period: 'Mar 2024 - Present',
      description: 'Oversee game development projects proposed by Project Leads from initial drafting to completion. Provide guidance and support to Project Leads and team members to ensure organization.',
    },

    {
    title: 'Event Chair',
    company: 'ACM',
    period: 'Feb 2024 - Present',
    description: '',
    },

    {
      title: 'Lead Systems Engineer (NASA LSPACE Program)',
      company: 'NASA',
      period: 'Sept - Nov 2024',
      description: '',
    },

    {
      title: 'Research Development Software Engineer Intern',
      company: 'Nucleo',
      period: 'Jul - Sept 2024',
      description: 'Implemented AI solutions in the neurotech field.',
    },

    {
      title: 'Software Engineering Fellow',
      company: 'Headstarter',
      period: 'Jul - Sept 2024',
      description: '',
    },

    {
      title: 'Computer Science Grader',
      company: 'University of California, Riverside',
      period: 'Jan - Mar 2024',
      description: 'Evaluated and graded student assignments, quizzes, and exams based on rubric. Offered support to students during lab hours to address their questions and concerns regarding the course (assignments and grades).',
    },

    {
      title: 'UI/UX Designer',
      company: 'DesignVerse',
      period: 'Oct - Dec 2023',
      description: 'Created wireframes, interactive prototypes, and high-fidelity mockups, optimizing design workflows and decreasing development time.',
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A journey illustrating my engineering and technology experiences.
            </p>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                    <p className="text-xl text-indigo-600">{exp.company}</p>
                  </div>
                  <div className="flex items-center text-gray-600 mt-2 md:mt-0">
                    <Calendar size={20} className="mr-2" />
                    {exp.period}
                  </div>
                </div>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-indigo-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Skills & Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'C++', 'Python', 'Java', 'JavaScript',
                'HTML/CSS', 'C#', 'React', 'Next.js',
                'Vue.js', 'Django', 'Tailwind CSS', 'Git',
                'Visual Studio Code', 'scikit-learn', 'pandas', 'Figma'
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-white rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}