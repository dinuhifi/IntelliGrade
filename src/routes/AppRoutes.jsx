import TeacherDashboard from '../pages/TeacherDashboard'
import LandingPage from '../pages/LandingPage'
import TeacherLogin from '../pages/TeacherLogin'
import TeacherSignup from '../pages/TeacherSignup'
import CorrectionPage from '../pages/CorrectionPage'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function AppRoutes() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/teacher/login" element={<TeacherLogin />} />
          <Route path="/teacher/signup" element={<TeacherSignup />} />
          <Route path='/dashboard' element={<TeacherDashboard/>}/>
          <Route path='/correction/:examId' element={<CorrectionPage />} />
        </Routes>
      </Router>
  )
}

export default AppRoutes
