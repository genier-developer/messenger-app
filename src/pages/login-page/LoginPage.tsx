import {FC} from 'react';
import {useNavigate} from "react-router-dom";

export const LoginPage: FC = () => {
  const navigate = useNavigate()

  const handleSubmit = () =>{
    console.log("Submitted!")
    navigate("/chat")
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login to WhatsApp Chat</h1>
        <div>
          <label>ID</label>
          <input
            type='text'
            onChange={()=>{}}
          />
          <label>API Token</label>
          <input
            type="text"
            id="apiTokenInstance"
            onChange={() => {}}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>

  );
};