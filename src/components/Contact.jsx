const Contact = () => {
  return (
    <section id='contact' className="max-w-7xl mx-auto border-b-2 py-20">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4">Contact</h2>
        <p className="text-xl text-gray-600">Get in touch with our team or explore our project</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 px-8">
        {/* Team Members - Left Side */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-3xl font-bold mb-6">Our Team</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-xl">DK</span>
              </div>
              <p className="font-semibold">Dinesh Kumar C P</p>
              <p className="text-sm text-gray-600">Team Lead</p>
            </div>
            
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-xl">SA</span>
              </div>
              <p className="font-semibold">Santosh A</p>
              <p className="text-sm text-gray-600">Developer</p>
            </div>
            
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-xl">JP</span>
              </div>
              <p className="font-semibold">Jaiyanth Jitendra P</p>
              <p className="text-sm text-gray-600">Designer</p>
            </div>
            
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-xl">AS</span>
              </div>
              <p className="font-semibold">Adhithya Swaminathan</p>
              <p className="text-sm text-gray-600">Tester</p>
            </div>
          </div>
        </div>

        {/* Project Links - Right Side */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-3xl font-bold mb-6">Project Resources</h3>
          <div className="space-y-4">
            <a 
              href="https://github.com/dinuhifi/IntelliGrade-backend" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <div className="w-8 h-8 mr-4">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold">GitHub Repository</p>
                <p className="text-sm text-gray-300">View source code and contribute</p>
              </div>
            </a>
            
            <a 
              href="#" 
              className="flex items-center p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <div className="w-8 h-8 mr-4">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                  <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold">Project Documentation</p>
                <p className="text-sm text-blue-100">Technical specs and user guide</p>
              </div>
            </a>
            
            <div className="p-4 bg-gray-50 rounded-lg mt-6">
              <p className="text-sm text-gray-600 mb-2">
                <strong>Built by:</strong> Computer Science Students
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Institution:</strong> [Your College Name]
              </p>
              <p className="text-sm text-gray-600">
                <strong>Academic Year:</strong> 2024-25
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact




