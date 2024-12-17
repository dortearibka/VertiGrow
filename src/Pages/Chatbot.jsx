import { useState } from 'react';
import NavbarUser from '../Components/NavbarUser';
import ChatbotMessages from '../Sections/Chatbot/ChatbotMessage'
import ChatbotInput from '../Sections/Chatbot/ChatbotInput';


export default function Chatbot() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    setMessages([...messages, { text: message, fromUser: true }]);
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: 'Response from bot', fromUser: false },
    ]);
  };

  return (
    <div className="flex flex-col h-screen">
      <NavbarUser />
      <ChatbotMessages messages={messages} />
      <ChatbotInput onSend={handleSendMessage} />
    </div>
  );
}
