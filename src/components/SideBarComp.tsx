import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface SidebarCompProps {
  onShowSidebar: () => void;
}

const SidebarComp: React.FC<SidebarCompProps> = ({ onShowSidebar }) => {
  const [isHidden, setIsHidden] = useState(false);

  const toggleSidebar = () => {
    setIsHidden(!isHidden);
  };

  if (isHidden) {
    // Retorna apenas o botão na barra superior quando o menu está oculto
    return null;
  }

  return (
    <aside className="w-64 h-screen bg-gray-800 text-white p-4 relative">
      <button
        onClick={toggleSidebar}
        className="absolute top-2 right-2 bg-gray-700 text-white p-2 rounded"
      >
        Ocultar
      </button>
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
  );
};

export default SidebarComp;