import AuthForm from "../components/AuthForm";

const TeacherSignup = () => {
  return <AuthForm title="Teacher Signup" isSignup={true} userType="teacher" />;
};

export default TeacherSignup;
