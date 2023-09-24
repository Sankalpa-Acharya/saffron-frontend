import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import ChatPage from './pages/ChatPage'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/chat" element={<ChatPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
