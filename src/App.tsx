import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import LoginPage from "./pages/Auth/LoginPage.tsx"
import RegisterPage from "./pages/Auth/RegisterPage.tsx"
import { LandingPage } from "./pages/LandingPage/LandingPage.tsx"
import { Dashboard } from "./pages/UserPages/Dashboard.tsx"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
