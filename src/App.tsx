import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ModalComp from './components/ModalComp';
import TopComp from './components/TopComp';
import SidebarComp from './components/SideBarComp';
import TaskComp from './components/TaksComp';
import LoginModalComp from './components/LoginModalComp';

interface Task {
  id: number;
  title: string;
  description: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [templateTitle, setTemplateTitle] = useState('');
  const [templateDescription, setTemplateDescription] = useState('');

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);


  const handleAddTask = () => {
    if (!newTitle.trim()) return; // EVITA ADICIONAR TAREFA SEM TÍTULO
  
    const newTask: Task = {
      id: tasks.length + 1,
      title: newTitle,
      description: newDescription,
    };
  
    setTasks([...tasks, newTask]);
  
    // LIMPA OS CAMPOS
    setNewTitle('');
    setNewDescription('');
  };
  
  const handleEditTask = (id: number, updatedTitle: string, updatedDescription: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, title: updatedTitle, description: updatedDescription } : task
    );
    setTasks(updatedTasks);
  };
  

  return (
    <div className="flex">
      <SidebarComp />
      <div className="flex-1">
        <TopComp />
        <div className="p-4">

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-purple-500 text-white px-4 py-2 rounded"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button
            onClick={() => setIsLoginModalOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Abrir Login
          </button>

          {/* <div className="mt-4">
            {tasks.map((task) => (
              <TaskComp
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                onEdit={handleEditTask}
              />
            ))}
          </div> */}
          <div className="mt-4">
            {tasks.map((task) => (
            <TaskComp
              key={task.id}
              id={task.id}
              title={task.title}
              description={task.description}
              onEdit={handleEditTask}
          />
            ))}
          </div>
          <ModalComp isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <h2 className="text-xl font-bold mb-2 text-black">Novo Template</h2>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="Título da tarefa"
              className="border px-2 py-1 mr-2"
            />
            <textarea
              placeholder="Descrição"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              className="border px-2 py-1 mr-2"
            />
            <button
              onClick={() => {
                // AQUI TU PODE CRIAR UM NOVO TEMPLATE OU COMPONENTE USANDO OS DADOS
                handleAddTask();
                console.log('Novo template criado:', templateTitle, templateDescription);
                setIsModalOpen(false);
                setTemplateTitle('');
                setTemplateDescription('');
              }}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Salvar
            </button>
          </ModalComp>

          <LoginModalComp
            isOpen={isLoginModalOpen}
            onClose={() => setIsLoginModalOpen(false)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;