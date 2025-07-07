import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./hooks/useAuth"
import HomePage from "./pages/HomePage"
import RoomsCatalogue from "./pages/RoomsCatalogue"
import RoomDetailsPage from "./pages/RoomDetailsPage"
import ServicesPage from "./pages/ServicesPage"
import AboutPage from "./pages/AboutPage"
import CommunityPage from "./pages/CommunityPage"
import AccountPage from "./pages/AccountPage"

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rooms" element={<RoomsCatalogue />} />
            <Route path="/rooms/:id" element={<RoomDetailsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/account" element={<AccountPage />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
