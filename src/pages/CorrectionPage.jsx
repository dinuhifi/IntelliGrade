import { useParams, Link } from 'react-router-dom';

const CorrectionPage = () => {
    // This hook gets the dynamic part of the URL (e.g., the '123' from '/correction/123')
    const { examId } = useParams();

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
                    {/* Use Link here */}
                    <Link to="/dashboard" className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                        Back to Dashboard
                    </Link>
                </div>
            </header>
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <div className="bg-white rounded-lg shadow p-8 text-center">
                        <h1 className="text-2xl font-bold text-gray-900">Correction Page</h1>
                        <p className="mt-4 text-gray-600">
                            You are now correcting Exam ID: <span className="font-mono bg-gray-200 text-gray-800 px-2 py-1 rounded">{examId}</span>
                        </p>
                        <p className="mt-2 text-gray-500">This is a placeholder page. Correction functionality will be built here.</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default CorrectionPage;