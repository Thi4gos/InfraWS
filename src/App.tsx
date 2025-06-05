import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ModalComp from './Modals/ModalComp';
import TopComp from './components/TopComp';
import SidebarComp from './components/SideBarComp';
import TaskComp from './components/TaksComp';
import { useAuth } from "react-oidc-context";

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

  let idCounter = 1;
  let fakeDB: Task[] = [];

  async function fetchTasks(): Promise<Task[]> {
    return fakeDB;
  }

  async function createTask(task: Omit<Task, 'id'>): Promise<Task> {
    const newTask = { ...task, id: idCounter++ };
    fakeDB.push(newTask);
    return newTask;
  }

  async function updateTask(task: Task): Promise<Task> {
    fakeDB = fakeDB.map(t => t.id === task.id ? task : t);
    return task;
  }

  async function deleteTask(id: number): Promise<void> {
    fakeDB = fakeDB.filter(t => t.id !== id);
  }

  const handleEditTask = async (id: number, updatedTitle: string, updatedDescription: string) => {
    const updatedTask = { id, title: updatedTitle, description: updatedDescription };
    await updateTask(updatedTask);
    setTasks(tasks.map((task) =>
      task.id === id ? updatedTask : task
    ));
  };

  const handleAddTask = async () => {
    if (!templateTitle.trim()) return;
    const newTask = {
      title: templateTitle,
      description: templateDescription,
    };
    const savedTask = await createTask(newTask);
    setTasks([...tasks, savedTask]);
    setTemplateTitle('');
    setTemplateDescription('');
  };

  const handleDeleteTask = async (id: number) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  useEffect(() => {
    fetchTasks().then(setTasks);
  }, []);

  const auth = useAuth();

  const signOutRedirect = () => {
  const clientId = "6ldghjnvmtv1vjkkomripqncnr";
  const logoutUri = window.location.origin;
  const cognitoDomain = "https://<user pool domain>";
   window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  return (
  <div className="flex h-screen">

    <div className="w-64 bg-gray-800 text-white">
      <SidebarComp />
    </div>

    <div className="flex flex-col flex-1">
      <div className="h-16 bg-white shadow-md">
        <TopComp />
      </div>

      {/* CONTEÚDO ABAIXO DA BARRA SUPERIOR */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
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
              onDelete={handleDeleteTask}
            />
          ))}
        </div>
      </div>
    </div>

    <ModalComp isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <div className="p-4 flex flex-col gap-4 text-black"
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleAddTask();
          setIsModalOpen(false);
        }
      }}
      tabIndex={0} 
      >
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
);
}

export default App;
