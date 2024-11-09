import { ExternalLink, Github } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function Projects() {
  const projects = [
    {
      title: 'Application Sorter',
      description: 'Automatically sorts applications based on specific criteria.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800',
      tech: ['Python', 'pandas'],
      github: 'https://github.com/allison-pham/application-sorter',
      live: '',
    },
    {
      title: 'Assistify',
      description: '',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
      tech: ['Next.js'],
      github: 'https://github.com/allison-pham/assistify',
      live: '',
    },
    {
      title: 'Books Data Analysis',
      description: '',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800',
      tech: ['Python', 'Matplotlib', 'NumPy', 'pandas'],
      github: 'https://github.com/allison-pham/books-data-analysis',
      live: 'https://example.com',
    },
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
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                    >
                      <Github size={20} />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
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