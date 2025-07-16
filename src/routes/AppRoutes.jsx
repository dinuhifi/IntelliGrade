import TeacherDashboard from '../pages/TeacherDashboard'
import LandingPage from '../pages/LandingPage'
import TeacherLogin from '../pages/TeacherLogin'
import TeacherSignup from '../pages/TeacherSignup'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function AppRoutes() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/teacher/login" element={<TeacherLogin />} />
          <Route path="/teacher/signup" element={<TeacherSignup />} />
          <Route path='/dashboard' element={<TeacherDashboard/>}/>
        </Routes>
      </Router>
  )
}

export default AppRoutes
