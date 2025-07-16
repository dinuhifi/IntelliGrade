/**
 * A modal to display detailed information about a selected exam.
 * @param {object} props - The component props.
 * @param {boolean} props.show - Whether the modal is visible.
 * @param {object} props.exam - The selected exam object to display.
 * @param {function} props.onClose - Function to close the modal.
 */

import StatusBadge from "./StatusBadge";

const ExamDetailsModal = ({ show, exam, onClose }) => {
  if (!show || !exam) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex justify-between items-start p-6 border-b border-gray-200">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {exam.exam_name || 'Untitled Exam'}
            </h3>
            <div className="flex items-center">
              <StatusBadge status={exam.status} />
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-2 -mr-2 -mt-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-gray-900 mb-3">Basic Information</h4>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-700">Exam Name</label>
                  <p className="text-sm text-gray-900 mt-1">{exam.exam_name || 'N/A'}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Subject</label>
                  <p className="text-sm text-gray-900 mt-1">{exam.subject || 'N/A'}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Exam Date</label>
                  <p className="text-sm text-gray-900 mt-1">
                    {exam.exam_date ? new Date(exam.exam_date).toLocaleDateString() : 'N/A'}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Max Marks</label>
                  <p className="text-sm text-gray-900 mt-1">{exam.max_marks || 'N/A'}</p>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-gray-900 mb-3">Additional Details</h4>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-700">Status</label>
                  <div className="mt-1">
                    <StatusBadge status={exam.status} />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Date Created</label>
                  <p className="text-sm text-gray-900 mt-1">
                    {exam.created_at ? new Date(exam.created_at).toLocaleDateString() : 'N/A'}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Date Updated</label>
                  <p className="text-sm text-gray-900 mt-1">
                    {exam.updated_at ? new Date(exam.updated_at).toLocaleDateString() : 'N/A'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end space-x-3 p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 transition-colors duration-200"
          >
            Close
          </button>
          <button
            onClick={() => {/* Navigate to correction page */}}
            className="px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 transition-colors duration-200"
          >
            Start Correction
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamDetailsModal;