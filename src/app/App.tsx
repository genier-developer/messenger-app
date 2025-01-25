import {FC} from "react";
import {Login} from "../pages/login/login.tsx";
import {Chat} from "../pages/chat/chat.tsx";
import {NotFound} from "../pages/error/not-found.tsx";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './../styles/global.scss'

export const App: FC = () => {

  return (
    <Router>
      <Routes>
        <Route path={"login"} element={<Login/>}/>
        <Route path="/chat" element={<Chat />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </Router>
  )

}
