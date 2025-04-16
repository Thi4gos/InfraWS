import React from 'react';
import { useState } from 'react';
import LoginModalComp from './LoginModalComp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const TopComp: React.FC = () => {
  
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">EvenNote</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Sobre
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contato
              </a>
            </li>
            <li>
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
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