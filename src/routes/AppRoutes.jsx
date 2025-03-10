import LandingPage from '../pages/LandingPage'
import TeacherLogin from '../pages/TeacherLogin'
import TeacherSignup from '../pages/TeacherSignup'
import StudentLogin from '../pages/StudentLogin'
import StudentSignup from '../pages/StudentSignup'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function AppRoutes() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/teacher/login" element={<TeacherLogin />} />
          <Route path="/teacher/signup" element={<TeacherSignup />} />
          <Route path="/student/login" element={<StudentLogin />} />
          <Route path="/student/signup" element={<StudentSignup />} />
        </Routes>
      </Router>
  )
}

export default AppRoutes
