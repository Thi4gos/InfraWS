import React from 'react';
import { useState } from 'react';
import LoginModalComp from '../Modals/LoginModalComp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const TopComp = () => {
  
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white h-14 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">EvenNote</h1>
        
        <nav>
          <ul className="flex space-x-4 aling-items-center">
            <li>
              <a
                href="#"
                className="bg-blue-500 text-white p-3 rounded hover:bg-blue-700 transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-blue-500 text-white p-3 rounded hover:bg-blue-700 transition"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-blue-500 text-white p-3 rounded hover:bg-blue-700 transition"
              >
                Contato
              </a>
            </li>
            <li>
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="bg-blue-500 text-white p-3 rounded hover:bg-blue-700 transition"
              >
                <FontAwesomeIcon icon={faUser} />
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <LoginModalComp
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
</header>

  );
};

export default TopComp;