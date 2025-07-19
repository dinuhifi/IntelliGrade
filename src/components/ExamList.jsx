import ExamCard from "./ExamCard";

const ExamList = ({ loading, exams, onViewDetails}) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-gray-500">Loading exams...</div>
      </div>
    );
  }

  if (exams.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 text-lg">No exams found</div>
        <p className="text-gray-400 mt-2">Click "Add Exam" to create your first exam</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {exams.map((exam) => (
        <ExamCard 
          key={exam.id} 
          exam={exam} 
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
};

export default ExamList;