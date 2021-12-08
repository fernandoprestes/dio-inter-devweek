import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SingIn from '../pages/SingIn'
import SingUp from '../pages/SingUp'
import Dashboard from '../pages/Dashboard'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SingIn />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
