import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ModalComp from './Modals/ModalComp';
import TopComp from './components/TopComp';
import SidebarComp from './components/SideBarComp';
import TaskComp from './components/TaksComp';

interface Task {
  id: number;
  title: string;
  description: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [templateTitle, setTemplateTitle] = useState('');
  const [templateDescription, setTemplateDescription] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditTask = (id: number, updatedTitle: string, updatedDescription: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, title: updatedTitle, description: updatedDescription } : task
    );
    setTasks(updatedTasks);
  };

  const handleAddTask = () => {
    if (!templateTitle.trim()) return;

    const newTask: Task = {
      id: tasks.length + 1,
      title: templateTitle,
      description: templateDescription,
    };

    setTasks([...tasks, newTask]);

    // LIMPA CAMPOS
    setTemplateTitle('');
    setTemplateDescription('');
  };

  return (
    <div className="flex">
      <div className="flex-1">
        <TopComp />
        <SidebarComp />

        <div className="p-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700 active:scale-105 transition-transform duration-300"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>

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
        </div>

        <ModalComp isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className="p-4 flex flex-col gap-4 text-black">
            <h2 className="text-2xl font-semibold text-center">Novo Template</h2>
            <input
              type="text"
              value={templateTitle}
              onChange={(e) => setTemplateTitle(e.target.value)}
              placeholder="Título da tarefa"
              className="border border-gray-300 px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Descrição"
              value={templateDescription}
              onChange={(e) => setTemplateDescription(e.target.value)}
              className="border border-gray-300 px-3 py-2 rounded w-full h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={() => {
                handleAddTask();
                setIsModalOpen(false);
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Salvar
            </button>
          </div>
        </ModalComp>
      </div>
    </div>
  );
}

export default App;
