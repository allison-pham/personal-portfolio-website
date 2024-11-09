import { Code, Palette, Zap } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function About() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a 2nd year student at UC Riverside, where I develop my knowledge in computer science, UI/UX, and advocacy through the projects I create. I'm passionate about tech, design, and justice to enhance innovation, growth, and learning!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img
                src="src/assets/bunny-planet-stars.png"
                alt="Profile"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h3>
              <p className="text-gray-900 mb-4">
                  My focuses include:
                  <li>AI/ML to combat world issues 🤖</li>
                  <li>User-centered design (UCD) 🎨</li>
                  <li>Robust system integration ⚙️</li>
                  <li>Strategic, data-informed methodology to support dynamic environments 🪴</li>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-indigo-50 rounded-lg">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white mb-4">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Full Stack</h3>
              <p className="text-gray-600">
                Developing clean design systems to enhance optimization and productivity.
              </p>
            </div>
            <div className="p-6 bg-purple-50 rounded-lg">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                <Palette size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">UI/UX</h3>
              <p className="text-gray-600">
                Designing impactful user interfaces (UI) in combination with gamification.
              </p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-4">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Performance</h3>
              <p className="text-gray-600">
                Optimizing for better efficiency and speed to emphasize on user experience (UX).
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}