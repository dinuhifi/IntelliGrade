import { Link } from 'react-router-dom'

const Features = () => {
  return (
    <section id="features" className="max-w-7xl mx-auto border-b-2 py-20">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4">Features</h2>
        <p className="text-xl text-gray-600">Everything you need to streamline your grading process</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 px-8">
        {/* Feature 1 */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <div className="mb-6">
            <h3 className="text-3xl font-bold mb-4">1. Upload All Answer Scripts Easily</h3>
            <p className="text-lg text-gray-700 mb-6">"You can scan or photograph student answer sheets and upload them to the system — all in one go."</p>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-500 mr-3">•</span>
              <span>Upload multiple student papers as PDFs</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-3">•</span>
              <span>The system detects each student's name and roll number automatically</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-3">•</span>
              <span>You don't need to rename files or organize anything manually</span>
            </li>
          </ul>
        </div>

        {/* Feature 2 */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <div className="mb-6">
            <h3 className="text-3xl font-bold mb-4">2. You Stay in Control</h3>
            <p className="text-lg text-gray-700 mb-6">"You can review and adjust all the AI-assigned scores if needed."</p>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-500 mr-3">•</span>
              <span>See what the AI scored and why</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3">•</span>
              <span>Add or edit marks or feedback easily</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3">•</span>
              <span>Approve or override anything before finalizing</span>
            </li>
          </ul>
        </div>

        {/* Feature 3 */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <div className="mb-6">
            <h3 className="text-3xl font-bold mb-4">3. Automatic Report Cards</h3>
            <p className="text-lg text-gray-700 mb-6">"After reviewing, you can generate reports for all students with one click."</p>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-purple-500 mr-3">•</span>
              <span>Personalized result sheets for each student</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-3">•</span>
              <span>Includes detailed marks, feedback, and grades</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-3">•</span>
              <span>Ready to print or share as PDFs or links</span>
            </li>
          </ul>
        </div>

        {/* Feature 4 */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <div className="mb-6">
            <h3 className="text-3xl font-bold mb-4">4. Saves You Hours of Manual Correction</h3>
            <p className="text-lg text-gray-700 mb-6">"Teachers often take 3–4 hours per batch — IntelliGrade brings it down to 20–30 minutes."</p>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-orange-500 mr-3">•</span>
              <span>No flipping pages, no cross-checking answers manually</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-3">•</span>
              <span>You can finish evaluating even a large class in under an hour</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8 mx-8">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Grading?</h3>
          <p className="text-xl mb-6">Join thousands of teachers who have already saved hours with IntelliGrade</p>
          <Link to='/teacher/signup'>
          <button onClick="" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started Today
          </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Features