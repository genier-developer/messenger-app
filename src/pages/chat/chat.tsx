import {FC, useState} from 'react';

export type Message = {
  id: number;
  text: string;
  sender: string;
  time: string;
}

const initialMessage: Message[] = [
  {
    id: 1,
    text: 'Hi, it is me',
    sender: 'Me',
    time: '18:23'
  },
  {
    id: 2,
    text: 'Hi, stranger!',
    sender: 'Me',
    time: '19:45'}
]
export const Chat: FC = () => {
  const [ messages, setMessages] = useState<Message[]>(initialMessage)

  return (
    <>
      <h1>
        This is Chat Page
      </h1>
      {messages.map((message)=>(
        <>
          <div key={message.id}>{message.text}</div>
          <div>{message.time}</div>
        </>
      ))}
    </>
  );
};
