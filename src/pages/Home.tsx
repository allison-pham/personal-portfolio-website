import { ArrowRight, Github, Linkedin} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              I'm <span className="text-indigo-600">Allison Pham</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
              A passionate developer and designer engineering through AI/ML, Cybersecurity, Software Engineering, and UI/UX.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                to="/projects"
                className="flex items-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-200"
              >
                View projects
                <ArrowRight size={20} />
              </Link>
            </div>

            <div className="flex items-center justify-center gap-6">
              <a
                href="https://github.com/allison-pham"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/allisonpham7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}