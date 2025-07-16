import { useState, useEffect } from 'react';

const TeacherDashboard = () => {
  const [loading, setLoading] = useState(false);
  const [exams, setExams] = useState([]);
  const [examLoading, setExamLoading] = useState(true);

  useEffect(() => {
    fetchExams();
  }, []);

  const fetchExams = async () => {
    setExamLoading(true);
    try {
      const response = await fetch('http://localhost:8000/get_exams', {
        method: 'GET',
        credentials: 'include',
      });

      if (response.ok) {
        const data = await response.json();
        setExams(data.exams);
      } else {
        console.error('Error fetching exams');
      }
    } catch (error) {
      console.error('Network error:', error);
    } finally {
      setExamLoading(false);
    }
  };

  const handleSignOut = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8000/signout', {
        method: 'GET',
        credentials: 'include',
      });

      if (response.ok) {
        // Redirect to login page - you can replace this with your routing logic
        window.location.href = '/teacher/login';
      } else {
        alert('Error signing out');
      }
    } catch (error) {
      alert('Network error during sign out');
    } finally {
      setLoading(false);
    }
  };

  const handleAddExam = () => {
    // Navigate to add exam page - you can replace this with your routing logic
    window.location.href = '/add-exam';
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-blue-600">Intelligrade</h1>
              </div>
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={handleAddExam}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Add Exam
              </button>
              
              <button
                onClick={handleSignOut}
                disabled={loading}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 disabled:opacity-50"
              >
                {loading ? 'Signing out...' : 'Sign Out'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Your Exams</h2>
            
            {examLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="text-gray-500">Loading exams...</div>
              </div>
            ) : exams.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-500 text-lg">No exams found</div>
                <p className="text-gray-400 mt-2">Click "Add Exam" to create your first exam</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {exams.map((exam) => (
                  <div key={exam.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">{exam.subject_name || 'Untitled Exam'}</h3>
                      <span className="text-sm text-gray-500">#{exam.id}</span>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      {exam.exam_date && (
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Date:</span> {new Date(exam.exam_date).toLocaleDateString()}
                        </p>
                      )}
                      {exam.duration && (
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Duration:</span> {exam.duration} minutes
                        </p>
                      )}
                      {exam.total_marks && (
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Total Marks:</span> {exam.total_marks}
                        </p>
                      )}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <button 
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                        onClick={() => {/* Navigate to exam details */}}
                      >
                        View Details
                      </button>
                      <button 
                        className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors duration-200"
                        onClick={() => {/* Navigate to correction page */}}
                      >
                        Start Correction
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeacherDashboard;