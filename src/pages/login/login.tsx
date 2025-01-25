import {ChangeEvent, FC, FormEvent, useCallback, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import s from './login.module.scss';

export const Login: FC = () => {
  const navigate = useNavigate();
  const [idInstance, setIdInstance] = useState('');
  const [apiTokenInstance, setApiTokenInstance] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!idInstance.trim() || !apiTokenInstance.trim()) {
      setError('Both inputs are required')
      return
    } else {
      localStorage.setItem("idInstance", idInstance.trim() )
      localStorage.setItem("apiTokenInstance", apiTokenInstance.trim())
      setError('');
      navigate('/chat');
    }
  };
  const handleIdChange =  useCallback((e: ChangeEvent<HTMLInputElement>)=>{
    setIdInstance(e.target.value)
  }, [])
  const handleApiTokenChange = useCallback((e: ChangeEvent<HTMLInputElement>)=>{
    setApiTokenInstance((e.target.value))
  }, [])

  return (
    <div className={s.container}>
      <form onSubmit={handleSubmit} className={s.form}>
        <h1>Welcome to WhatsApp</h1>
        <p className={s.subHeader}>Please log in to continue</p>

        <div className={s.inputGroup}>
          <label htmlFor="id">ID</label>
          <input
            type="text"
            id="id"
            value={idInstance}
            onChange={handleIdChange}
            placeholder="Enter your ID"
          />
        </div>

        <div className={s.inputGroup}>
          <label htmlFor="apiToken">API Token</label>
          <input
            type="text"
            id="apiToken"
            value={apiTokenInstance}
            onChange={handleApiTokenChange}
            placeholder="Enter your API token"
          />
        </div>

        {error && <div className={s.error}>{error}</div>}

        <button type="submit" className={s.submitButton}>
          Login
        </button>
      </form>
    </div>
  );
};
