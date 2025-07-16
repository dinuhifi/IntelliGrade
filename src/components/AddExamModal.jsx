/**
 * A modal for the two-step process of adding an exam and its answer key.
 * @param {object} props - The component props.
 * @param {boolean} props.show - Whether the modal is visible.
 * @param {function} props.onClose - Function to close the modal.
 * @param {function} props.onExamAdded - Function to call after an exam is added to refresh the list.
 */

import { useState, useEffect } from 'react';

const AddExamModal = ({ show, onClose, onExamAdded }) => {
    const [examDetails, setExamDetails] = useState({ exam_name: '', subject: '', max_marks: '', exam_date: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const [newlyCreatedExam, setNewlyCreatedExam] = useState(null);
    const [answerKeyFile, setAnswerKeyFile] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadError, setUploadError] = useState(null);
    const [uploadSuccess, setUploadSuccess] = useState(false);

    useEffect(() => {
        if (!show) {
            setTimeout(() => {
                setExamDetails({ exam_name: '', subject: '', max_marks: '', exam_date: '' });
                setIsLoading(false);
                setError(null);
                setNewlyCreatedExam(null);
                setAnswerKeyFile(null);
                setIsUploading(false);
                setUploadError(null);
                setUploadSuccess(false);
            }, 300); // Reset after close animation
        }
    }, [show]);

    // --- BUG FIX ---
    // Correctly uses e.target.name to update the corresponding state property.
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setExamDetails(prev => ({ ...prev, [name]: value }));
    };
    
    const handleFileChange = (e) => setAnswerKeyFile(e.target.files[0]);

    const handleAddExam = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('http://localhost:8000/add_exam', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(examDetails),
            });
            const data = await response.json();
            if (response.ok) {
                setNewlyCreatedExam(data.exam);
            } else {
                setError(data.detail || 'Failed to create exam.');
            }
        } catch (err) {
            setError('A network error occurred.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleUploadAnswerKey = async () => {
        if (!answerKeyFile || !newlyCreatedExam) return;
        setIsUploading(true);
        setUploadError(null);
        const formData = new FormData();
        formData.append('file', answerKeyFile);
        formData.append('exam_id', newlyCreatedExam.id);
        try {
            const response = await fetch('http://localhost:8000/upload_answer_key', {
                method: 'POST',
                credentials: 'include',
                body: formData,
            });
            const data = await response.json();
            if (response.ok) {
                setUploadSuccess(true);
                onExamAdded();
            } else {
                setUploadError(data.detail || 'Failed to upload answer key.');
            }
        } catch (err) {
            setUploadError('A network error occurred during upload.');
        } finally {
            setIsUploading(false);
        }
    };

    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-lg w-full">
                <div className="flex justify-between items-center p-5 border-b">
                    <h3 className="text-xl font-semibold text-gray-900">
                        {newlyCreatedExam ? 'Step 2: Upload Answer Key' : 'Step 1: Create New Exam'}
                    </h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
                
                {!newlyCreatedExam ? (
                    <form onSubmit={handleAddExam}>
                        <div className="p-6 space-y-4">
                            <div>
                                <label htmlFor="exam_name" className="block mb-2 text-sm font-medium text-gray-900">Exam Name</label>
                                <input type="text" name="exam_name" id="exam_name" value={examDetails.exam_name} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                                <input type="text" name="subject" id="subject" value={examDetails.subject} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                            </div>
                            <div>
                                <label htmlFor="max_marks" className="block mb-2 text-sm font-medium text-gray-900">Max Marks</label>
                                <input type="number" name="max_marks" id="max_marks" value={examDetails.max_marks} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                            </div>
                            <div>
                                <label htmlFor="exam_date" className="block mb-2 text-sm font-medium text-gray-900">Exam Date</label>
                                <input type="date" name="exam_date" id="exam_date" value={examDetails.exam_date} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                            </div>
                            {error && <p className="text-sm text-red-600">{error}</p>}
                        </div>
                        <div className="flex items-center justify-end p-5 border-t space-x-3">
                            <button type="button" onClick={onClose} className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200">Cancel</button>
                            <button type="submit" disabled={isLoading} className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed">
                                {isLoading ? 'Creating...' : 'Create Exam & Proceed'}
                            </button>
                        </div>
                    </form>
                ) : (
                    <div className="p-6">
                        {uploadSuccess ? (
                            <div className="text-center py-4">
                                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900 mt-4">Upload Successful!</h3>
                                <p className="text-sm text-gray-500 mt-2">The exam has been created and the answer key is uploaded.</p>
                                <div className="mt-6">
                                    <button type="button" onClick={onClose} className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">Close</button>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                                    <p className="text-sm font-medium text-green-800">Success! Exam "{examDetails.exam_name}" created.</p>
                                    <p className="text-sm text-green-700 mt-1">Now, please upload the PDF answer key.</p>
                                </div>
                                <div>
                                    <label htmlFor="answer_key" className="block mb-2 text-sm font-medium text-gray-900">Answer Key File (PDF only)</label>
                                    <input type="file" name="answer_key" id="answer_key" onChange={handleFileChange} accept=".pdf" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none file:bg-gray-200 file:text-gray-700 file:border-0 file:px-4 file:py-2 file:mr-4" required />
                                </div>
                                {uploadError && <p className="text-sm text-red-600">{uploadError}</p>}
                                <div className="flex items-center justify-end pt-4 space-x-3">
                                    <button type="button" onClick={onClose} className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200">Cancel</button>
                                    <button type="button" onClick={handleUploadAnswerKey} disabled={isUploading || !answerKeyFile} className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed">
                                        {isUploading ? 'Uploading...' : 'Upload & Finish'}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddExamModal;