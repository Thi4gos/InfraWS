import React from 'react';

const SidebarComp = () => {
  
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white p-4 relative ">
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