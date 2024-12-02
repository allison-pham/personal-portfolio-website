import { Figma, Github } from 'lucide-react';
import whiteScreen from '../assets/white_screen.jpg';
import PageTransition from '../components/PageTransition';

export default function Projects() {
  const projects = [
    {
      title: 'Application Sorter',
      description: 'Streamline the application review process',
      image: whiteScreen,
      tech: ['Python', 'pandas'],
      github: 'https://github.com/allison-pham/application-sorter',
      figma: '',
      live: '',
    },

    {
      title: 'Assistify',
      description: 'Ask questions and receive AI customer support with quality responses',
      image: whiteScreen,
      tech: ['Next.js'],
      github: 'https://github.com/allison-pham/assistify',
      figma: '',
      live: '',
    },

    {
      title: 'BioQuest',
      description: '',
      image: whiteScreen,
      tech: ['Figma'],
      github: '',
      figma: 'https://www.figma.com/design/EmRp2UPnq7q1kqdPxtoJWT/Designverse-2024%3A-YouFlow',
      live: '',
    },

    {
      title: 'Boilerplate',
      description: '',
      image: whiteScreen,
      tech: [''],
      github: '',
      figma: '',
      live: '',
    },

    {
      title: 'Books Data Analysis',
      description: '',
      image: whiteScreen,
      tech: ['Python', 'Matplotlib', 'NumPy', 'pandas'],
      github: 'https://github.com/allison-pham/books-data-analysis',
      figma: '',
      live: '',
    },
    
    {
      title: 'Cozy Chat',
      description: 'An all-in-one learning x social media platform',
      image: whiteScreen,
      tech: [''],
      github: '',
      figma: '',
      live: '',
    },

    {
      title: 'Eevi',
      description: '',
      image: whiteScreen,
      tech: [''],
      github: '',
      figma: '',
      live: '',
    },

    {
      title: 'Frigerator Sim',
      description: '',
      image: whiteScreen,
      tech: [''],
      github: '',
      figma: '',
      live: '',
    },

    {
      title: 'Grocery in One',
      description: 'Streamline grocery shopping with a few clicks',
      image: whiteScreen,
      tech: [''],
      github: '',
      figma: '',
      live: '',
    },

    {
      title: 'Life Dev',
      description: '',
      image: whiteScreen,
      tech: [''],
      github: '',
      figma: '',
      live: '',
    },

    {
      title: 'Quick Study',
      description: '',
      image: whiteScreen,
      tech: [''],
      github: '',
      figma: '',
      live: '',
    },

    {
      title: 'Thin Ice',
      description: '',
      image: whiteScreen,
      tech: [''],
      github: '',
      figma: '',
      live: '',
    },

    {
      title: 'Weather Reminder System',
      description: '',
      image: whiteScreen,
      tech: [''],
      github: '',
      figma: '',
      live: '',
    },

    {
      title: 'Wifi QR Code Generator',
      description: '',
      image: whiteScreen,
      tech: [''],
      github: '',
      figma: '',
      live: '',
    },

    {
      title: 'YouFlow: Data Analyzer',
      description: 'Analyze data for eco-friendly resources and tools',
      image: whiteScreen,
      tech: [''],
      github: '',
      figma: '',
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