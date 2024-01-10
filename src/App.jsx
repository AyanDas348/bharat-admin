import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Sidebar from "./components/Sidebar"
import CardDefault from "./pages/CreateOffer"

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex bg-slate-100">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/offers/create" element={<CardDefault />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App