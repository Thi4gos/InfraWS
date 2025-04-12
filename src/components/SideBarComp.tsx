import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const SidebarComp: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false);

  const toggleSidebar = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="flex">
      {/* Botão para ocultar/exibir o menu */}
      <button
        onClick={toggleSidebar}
        className="bg-blue-600 text-white p-4 h-15"
      >
        {isHidden ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faBars} />}
      </button>

      {/* Sidebar */}
      {!isHidden && (
        <aside className="w-64 h-screen bg-gray-800 text-white p-4">
          <h2 className="text-lg font-bold mb-4">Menu</h2>
          <nav>
            <ul className="space-y-2">
              <li>
                <a href="#" className="block p-2 rounded hover:bg-gray-700">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 rounded hover:bg-gray-700">
                  Minhas Notas
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 rounded hover:bg-gray-700">
                  Configurações
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 rounded hover:bg-gray-700">
                  Sair
                </a>
              </li>
            </ul>
          </nav>
        </aside>
      )}
    </div>
  );
};

export default SidebarComp;