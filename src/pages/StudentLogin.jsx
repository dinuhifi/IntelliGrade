import AuthForm from "../components/AuthForm";

const StudentLogin = () => {
  return <AuthForm title="Student Login" isSignup={false} userType="student" />;
};

export default StudentLogin;
