import { useState, useEffect } from 'react';
import Header from '../components/Header';
import ExamList from '../components/ExamList';
import ExamDetailsModal from '../components/ExamDetailsModal';
import AddExamModal from '../components/AddExamModal';

const TeacherDashboard = () => {
  const [signOutLoading, setSignOutLoading] = useState(false);
  const [exams, setExams] = useState([]);
  const [examLoading, setExamLoading] = useState(true);
  const [selectedExam, setSelectedExam] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showAddExamModal, setShowAddExamModal] = useState(false);
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    fetchExams();
    fetchUser();
  }, []);

  const fetchUser = async () => {
    setUserLoading(true);
    try {
      const response = await fetch('http://localhost:8000/get_user', { method: 'GET', credentials: 'include' });
      if (response.ok) {
        const data = await response.json();
        setUser(data.user.user.user_metadata.email);
      } else { console.error('Error fetching user data'); }
    } catch (error) { console.error('Network error:', error); } 
    finally { setUserLoading(false); }
  };

  const fetchExams = async () => {
    setExamLoading(true);
    try {
      const response = await fetch('http://localhost:8000/get_exams', { method: 'GET', credentials: 'include' });
      if (response.ok) {
        const data = await response.json();
        setExams(data.exams);
      } else { console.error('Error fetching exams'); }
    } catch (error) { console.error('Network error:', error); } 
    finally { setExamLoading(false); }
  };

  const handleSignOut = async () => {
    setSignOutLoading(true);
    try {
      const response = await fetch('http://localhost:8000/signout', { method: 'GET', credentials: 'include' });
      if (response.ok) { window.location.href = '/teacher/login'; } 
      else { alert('Error signing out'); }
    } catch (error) { alert('Network error during sign out'); } 
    finally { setSignOutLoading(false); }
  };

  const handleViewDetails = (exam) => {
    setSelectedExam(exam);
    setShowDetailsModal(true);
  };
  
  const handleExamAdded = () => {
    setShowAddExamModal(false);
    fetchExams();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header 
        user={user}
        userLoading={userLoading}
        signingOut={signOutLoading}
        onSignOut={handleSignOut}
        onAddExam={() => setShowAddExamModal(true)}
      />

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Your Exams</h2>
            <ExamList
              loading={examLoading}
              exams={exams}
              onViewDetails={handleViewDetails}
            />
          </div>
        </div>
      </main>

      <ExamDetailsModal
        show={showDetailsModal}
        exam={selectedExam}
        onClose={() => setShowDetailsModal(false)}
      />

      <AddExamModal
        show={showAddExamModal}
        onClose={() => setShowAddExamModal(false)}
        onExamAdded={handleExamAdded}
      />
    </div>
  );
};

export default TeacherDashboard;
