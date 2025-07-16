import { useState } from 'react';

const TeacherDashboard = () => {
  const [loading, setLoading] = useState(false);

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
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Welcome to Your Dashboard</h2>
              <p className="text-gray-500">Your exam management content will go here</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeacherDashboard;