import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function ChatbotInput({ onSend }) {
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      onSend(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg z-10">
      <div className="flex justify-center items-center space-x-2">
        <input
          type="text"
          placeholder="Masukkan pertanyaan anda"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border border-green-500 p-2 w-4/5 rounded"
        />
        <button
          className="bg-[#387F39] hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSend}
        >
          Kirim
        </button>
      </div>
    </div>
  );
}

ChatbotInput.propTypes = {
  onSend: PropTypes.func.isRequired,
};
