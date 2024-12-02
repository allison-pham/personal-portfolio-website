import { Figma, Github } from 'lucide-react';
import whiteScreen from '../assets/white_screen.jpg';
import PageTransition from '../components/PageTransition';

export default function Projects() {
  const projects = [
    {
      title: 'Application Sorter',
      description: 'Streamline the application review process.',
      image: whiteScreen,
      tech: ['Python', 'pandas'],
      github: 'https://github.com/allison-pham/application-sorter',
      figma: '',
      live: '',
    },

    {
      title: 'Assistify',
      description: 'Ask questions and receive AI customer support with quality responses.',
      image: whiteScreen,
      tech: ['Next.js', 'Figma'],
      github: 'https://github.com/allison-pham/assistify',
      figma: '',
      live: '',
    },

    {
      title: 'BioQuest',
      description: 'Gamification meets sustainability.',
      image: whiteScreen,
      tech: ['Next.js', 'JavaScript', 'Tailwind CSS', 'Figma'],
      github: '',
      figma: '',
      live: '',
    },

    {
      title: 'Boilerplate',
      description: 'Template for projects.',
      image: whiteScreen,
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/allison-pham/boilerplate',
      figma: '',
      live: '',
    },

    {
      title: 'Books Data Analysis',
      description: 'Analyze book data to draw effective conclusions.',
      image: whiteScreen,
      tech: ['Python', 'Matplotlib', 'NumPy', 'pandas'],
      github: 'https://github.com/allison-pham/books-data-analysis',
      figma: '',
      live: '',
    },
    
    {
      title: 'Cozy Chat',
      description: 'An all-in-one learning x social media platform.',
      image: whiteScreen,
      tech: ['Next.js', 'Figma'],
      github: '',
      figma: '',
      live: '',
    },

    {
      title: 'Eevi',
      description: 'The ultimate 0->1 software tool.',
      image: whiteScreen,
      tech: ['Next.js', 'JavaScript', 'Figma'],
      github: 'https://github.com/allison-pham/eevi-side-quests',
      figma: '',
      live: '',
    },

    {
      title: 'Frigerator Sim',
      description: 'Reduce food waste and increase efficiency.',
      image: whiteScreen,
      tech: ['C++'],
      github: 'https://github.com/pilafnoodle/FridgeSimulator',
      figma: '',
      live: '',
    },

    {
      title: 'Grocery in One',
      description: 'Streamline grocery shopping with a few clicks.',
      image: whiteScreen,
      tech: ['Python', 'scikit-learn', 'pandas'],
      github: 'https://github.com/allison-pham/grocery-in-one',
      figma: '',
      live: '',
    },

    {
      title: 'Life Dev',
      description: 'Increase life optimization - set goals, improve study habits, plan out projects, and enhance skill development.',
      image: whiteScreen,
      tech: ['C++'],
      github: 'https://github.com/allison-pham/life-dev',
      figma: '',
      live: '',
    },

    {
      title: 'Quick Study',
      description: 'Reduce and optimize study sessions.',
      image: whiteScreen,
      tech: ['Python'],
      github: 'https://github.com/allison-pham/quick-study',
      figma: '',
      live: '',
    },

    {
      title: 'Thin Ice',
      description: 'Recreation of being a fire puffle that traverses an ice maze.',
      image: whiteScreen,
      tech: ['Java', 'libGDX'],
      github: '',
      figma: '',
      live: '',
    },

    {
      title: 'Weather Reminder System',
      description: 'Receive notifications of weather changes to prepare for all situations.',
      image: whiteScreen,
      tech: ['Python'],
      github: '',
      figma: '',
      live: '',
    },

    {
      title: 'Wifi QR Code Generator',
      description: 'Save wifi logins -> save time.',
      image: whiteScreen,
      tech: ['Python'],
      github: 'https://github.com/allison-pham/wifi-qr-code-generator',
      figma: '',
      live: '',
    },

    {
      title: 'YouFlow: Data Analyzer',
      description: 'Analyze data for eco-friendly resources and tools.',
      image: whiteScreen,
      tech: ['HTML/CSS', 'JavaScript', 'Python', 'Figma'],
      github: '',
      figma: 'https://www.figma.com/design/EmRp2UPnq7q1kqdPxtoJWT/YouFlow',
      live: '',
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my personal projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                      >
                        <Github size={20} />
                        Code
                      </a>
                    )}

                    {project.figma && (
                      <a
                        href={project.figma}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                      >
                        <Figma size={20} />
                        Design
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}