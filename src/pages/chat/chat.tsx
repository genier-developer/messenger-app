import { FC, useState, useRef, useEffect } from 'react';
import s from './chat.module.scss';

export type Message = {
  id: number;
  text: string;
  user: 'sender' | 'receiver';
  time: string;
};

const initialMessages: Message[] = [
  {
    id: 1,
    text: 'Hi, how are you?',
    user: 'sender',
    time: '18:23',
  },
  {
    id: 2,
    text: 'Hi, stranger! I am fine, thanks!',
    user: 'receiver',
    time: '19:45',
  },
];

export const Chat: FC = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Автопрокрутка к последнему сообщению
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: messages.length + 1,
        text: newMessage,
        user: 'sender',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, message]);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className={s.container}>
      <div className={s.header}>
        <h1>Chat Room</h1>
        <p className={s.subHeader}>Stay connected with your friends</p>
      </div>

      <div className={s.messages}>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`${s.message} ${message.user === 'sender' ? s['sender-message'] : s['receiver-message']}`}
          >
            <div className={s['message-text']}>{message.text}</div>
            <div className={s['message-time']}>{message.time}</div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className={s.inputContainer}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type your message and press Enter..."
          className={s.input}
        />
        <button onClick={handleSendMessage} className={s.sendButton}>
          Send
        </button>
      </div>
    </div>
  );
};
