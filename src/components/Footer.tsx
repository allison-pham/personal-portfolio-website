import { Github, Linkedin} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Connect</h3>
            <p className="text-gray-600 mb-4">
              Building projects and exploring new technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/allison-pham"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/allisonham7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Navigation Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="/experience" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">
                  Experience
                </a>
              </li>
              <li>
                <a href="/project" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">
                  Project
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Ongoing Projects</h3>
            <p className="text-gray-600 mb-2">Cognitive science alongside neuromorphic engineering</p>
            <p className="text-gray-600 mb-2">Advocacy through policy</p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Allison Pham. Made with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}