/**
 * The main header for the dashboard.
 * @param {object} props - The component props.
 * @param {string} props.user - The user's email.
 * @param {boolean} props.userLoading - Whether the user data is loading.
 * @param {boolean} props.signingOut - Whether the sign-out process is active.
 * @param {function} props.onSignOut - Function to handle signing out.
 * @param {function} props.onAddExam - Function to navigate to the add exam page.
 */

import logo from '../assets/Intelligrade-logo.png';

const Header = ({ user, userLoading, signingOut, onSignOut, onAddExam }) => {

  return (
    <header className="bg-white shadow-sm border-b-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img 
                src={logo}
                alt="Intelligrade" 
                className="h-11 max-w"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* User Info */}
            <div className="flex items-center">
              {!userLoading && user && (
                <div className="text-sm text-gray-600">
                  <span className="font-medium">{user}</span>
                </div>
              )}
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={onAddExam}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Add Exam
              </button>
              
              <button
                onClick={onSignOut}
                disabled={signingOut}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 disabled:opacity-50"
              >
                {signingOut ? 'Signing out...' : 'Sign Out'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;