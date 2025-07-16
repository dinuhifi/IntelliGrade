import AuthForm from "../components/AuthForm";

const TeacherLogin = () => {
  return <AuthForm title="Teacher Login" isSignup={false} userType="teacher" />;
};

export default TeacherLogin;
