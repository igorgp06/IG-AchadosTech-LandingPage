import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Main } from './pages/Main'
import { StrictMode } from 'react'
import { PrivacyPolicy } from './pages/public/policy/PrivacyPolicy'
import { TermsOfService } from './pages/public/policy/TermsOfService'

function App() {
  return (
    <>
      <StrictMode>
        <BrowserRouter>
          <Routes>
            <Route index element={<Main />} />
            <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
            <Route path="/termos-de-servico" element={<TermsOfService />} />
          </Routes>
        </BrowserRouter>
      </StrictMode>
    </>
  )
}

export default App