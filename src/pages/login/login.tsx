import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './login.module.scss';

export const Login: FC = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [apiToken, setApiToken] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!id.trim() || !apiToken.trim()) {
      setError('Both fields are required.');
      return;
    }

    console.log('Login Successful!');
    setError('');
    navigate('/chat');
  };

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
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Enter your ID"
          />
        </div>

        <div className={s.inputGroup}>
          <label htmlFor="apiToken">API Token</label>
          <input
            type="text"
            id="apiToken"
            value={apiToken}
            onChange={(e) => setApiToken(e.target.value)}
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
