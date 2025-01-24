import {FC} from 'react';
import {useNavigate} from "react-router-dom";
import s from './login.module.scss'

export const Login: FC = () => {
  const navigate = useNavigate()

  const handleSubmit = () =>{
    console.log("Submitted!")
    navigate("/chat")
  }
  return (
    <div className={s.container}>
      <form onSubmit={handleSubmit} className={s.form}>
        <h1>Login to WhatsApp</h1>
        <div className={s.form}>
          <div className={s.input}>
            <label>ID</label>
            <input
              type='text'
              onChange={()=>{}}
            />
          </div>
          <div className={s.input}>
            <label>API Token</label>
            <input
              type="text"
              id="apiTokenInstance"
              onChange={() => {}}
            />
          </div>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>

  );
};