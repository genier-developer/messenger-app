import axios from "axios";
import {Message} from "../../pages/chat/chat.tsx";

const BASE_URL = import.meta.env.VITE_BASE_URL || "https://api.green-api.com";

export const sendMessage = async (
  idInstance: string,
  apiTokenInstance: string,
  chatId: string,
  message: string
): Promise<void> => {
  try {
    const url = `${BASE_URL}/waInstance${idInstance}/SendMessage/${apiTokenInstance}`;
    const payload = {
      chatId,
      message,
    };
    await axios.post(url, payload);
  } catch (error) {
    throw new Error(`Failed to send message: ${error}`);
  }
};

export const receiveMessages = async (
  idInstance: string,
  apiTokenInstance: string
): Promise<Message[]> => {
  try {
    const url = `${BASE_URL}/waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`;
    const response = await axios.get(url);
    console.log("Fetching messages...");
    return response.data;
  } catch (error) {
    throw new Error(`Failed to receive message ${error}`);
  }
};

export const deleteNotification = async (
  idInstance: string,
  apiTokenInstance: string,
  receiptId: number
): Promise<void> => {
  try {
    const url = `${BASE_URL}/waInstance${idInstance}/DeleteNotification/${apiTokenInstance}/${receiptId}`;
    await axios.delete(url);
  } catch (error) {
    throw new Error(`Failed to delete notification: ${error}`);
  }
};
