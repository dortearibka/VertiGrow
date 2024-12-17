import React from 'react';
import PropTypes from 'prop-types';

export default function ChatbotMessages({ messages }) {
  return (
    <div className="p-4 flex-1 overflow-y-auto mt-28 mx-20"> {/* Margin kiri dan kanan yang konsisten */}
      {/* Kontainer scrollable untuk pesan */}
      <div className="max-h-[500px]">
        <ul className="space-y-2 flex flex-col">
          {messages.map((message, index) => (
            <li
              key={index}
              className={`p-2 rounded-md flex ${
                message.fromUser
                  ? 'bg-green-500 text-white ml-4 mr-4 self-end max-w-[80%]'  // Pesan pengguna, margin kiri dan kanan, muncul di kanan
                  : 'bg-gray-200 ml-4 mr-4 self-start max-w-[80%]'  // Pesan chatbot, margin kiri dan kanan, muncul di kiri
              }`}
            >
              {message.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

ChatbotMessages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      fromUser: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
