import AuthForm from "../components/AuthForm";

const StudentSignup = () => {
  return <AuthForm title="Student Signup" isSignup={true} userType="student" />;
};

export default StudentSignup;
