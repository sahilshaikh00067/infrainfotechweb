import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import WhatsappButton from "./components/WhatsappButton"

import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import WhatsappApi from "./pages/WhatsappApi"
import PrivacyPolicy from "./pages/Privacypolicy"
import TermsOfService from "./pages/TermsofService"
import ScrollToTop from "./components/ScrollToTop"
import BulkSms from "./pages/BulkSms"
import RCS from "./pages/RCS"
import Voice from "./pages/Voice"
import Chatbot from "./pages/Chatbot"
import MultiChannelCampaigns from "./pages/MultiChannel"
import LeadPopup from "./components/LeadPopup"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <LeadPopup />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/whatsappapi" element={<WhatsappApi />} />
        <Route path="/bulksms" element={<BulkSms />} />
        <Route path="/rcs" element={<RCS />} />
        <Route path="/voice" element={<Voice />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/multi-channel" element={<MultiChannelCampaigns />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />


      </Routes>

      <Footer />
      <WhatsappButton />
    </BrowserRouter>
  )
}

export default App