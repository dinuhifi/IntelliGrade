import { Link } from "react-router-dom";

const AuthForm = ({ title, isSignup, userType }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      <div className="bg-white px-28 py-12 rounded-3xl shadow-md w-104">
        <h1 className="text-center font-bold text-3xl mb-10">{title}</h1>
        <form action="">
          <div className="rounded-2xl mb-5 flex flex-col gap-5">
            <input
              type="text"
              placeholder={userType === "student" ? "Roll No" : "Teacher ID"}
              className="border p-2 rounded-md"
            />
            <input type="password" placeholder="Enter Password" className="border p-2 rounded-md" />
            
            {isSignup && <input type="password" placeholder="Confirm Password" className="border p-2 rounded-md"/>}
          </div>
          
          <div className="text-center">
            <button type="submit" className="text-center font-semibold text-xl text-white bg-black px-4 py-2 rounded-lg transition transform hover:bg-green-600 hover:scale-105">
              {isSignup ? "Signup" : "Login"}
            </button>
          </div>
          
          <div className="text-center mt-5 flex flex-col gap-1">
            {!isSignup && <a href="#" className="underline">Forgot Password?</a>}
            <span>
              {isSignup ? "Existing User?" : "Don't have an Account?"}  
              <Link to={isSignup ? `/${userType}/login` : `/${userType}/signup`} className="underline ml-1">
                {isSignup ? "Login" : "Sign Up"}
              </Link>
            </span>
            <span>
              <Link to={userType === "student" ? "/teacher/signup" : "/student/signup"} className="underline">
                Click Here
              </Link> for {userType === "student" ? "Teacher" : "Student"} Portal
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
