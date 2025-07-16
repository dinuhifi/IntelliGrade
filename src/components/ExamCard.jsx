/**
 * Displays a single exam card in the list.
 * @param {object} props - The component props.
 * @param {object} props.exam - The exam data object.
 * @param {function} props.onViewDetails - Function to trigger the details modal.
 */

import StatusBadge from "./StatusBadge";

const ExamCard = ({ exam, onViewDetails }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 border border-gray-200">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900 flex-1 mr-3">{exam.exam_name || 'Untitled Exam'}</h3>
        <div className="flex flex-col items-end">
          <StatusBadge status={exam.status} />
        </div>
      </div>
      
      <div className="space-y-2 mb-6">
        {exam.exam_date && (
          <p className="text-sm text-gray-600">
            <span className="font-medium">Date:</span> {new Date(exam.exam_date).toLocaleDateString()}
          </p>
        )}
      </div>
      
      <div className="flex justify-between items-center">
        <button 
          className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline transition-colors duration-200"
          onClick={() => onViewDetails(exam)}
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
  );
};

export default ExamCard;