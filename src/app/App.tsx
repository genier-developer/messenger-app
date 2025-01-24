import '../App.css'
import {FC} from "react";
import {LoginPage} from "../pages/login-page/LoginPage.tsx";
import {ChatPage} from "../pages/chat-page/ChatPage.tsx";
import {NotFoundPage} from "../pages/error-page/NotFoundPage.tsx";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export const App: FC = () => {

  return (
    <Router>
      <Routes>
        <Route path={"login"} element={<LoginPage/>}/>
        <Route path="/chat" element={<ChatPage />} />
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </Router>
  )

}
