import React, { useState } from 'react';

interface TaskProps {
  id: number;
  title: string;
  description: string;
  onEdit: (id: number, title: string, description: string) => void;
  onDelete: (id: number) => void;
}

const TaskComp: React.FC<TaskProps> = ({ id, title, description, onEdit, onDelete }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editDescription, setEditDescription] = useState(description);

  const handleComplete = () => {
    setIsCompleted(!isCompleted);
  };

  const handleSave = () => {
    onEdit(id, editTitle, editDescription);
    setIsEditing(false);
  };

  return (
    <div
      className={`rounded-2xl shadow-lg p-5 mb-4 transition duration-300 ${
        isCompleted ? 'bg-gray-200 opacity-70' : 'bg-white'
      }`}
    >
      {isEditing ? (
        <div className="flex flex-col gap-3">
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded resize-none h-24 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <div className="flex gap-2 justify-end mt-2">
            <button
              onClick={handleSave}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"
            >
              Salvar
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded transition"
            >
              Cancelar
            </button>
          </div>
        </div>
      ) : (
        <>
          <h3
            className={`text-lg font-semibold ${
              isCompleted ? 'line-through text-gray-500' : 'text-black'
            }`}
          >
            {title}
          </h3>
          <p className={`mt-1 ${isCompleted ? 'line-through text-gray-400' : 'text-gray-700'}`}>
            {description}
          </p>
          <div className="flex gap-3 mt-4 justify-end">
            <button
              onClick={handleComplete}
              className={`${
                isCompleted ? 'bg-blue-300' : 'bg-blue-500'
              } text-white px-3 py-1 rounded hover:bg-blue-600 transition`}
            >
              {isCompleted ? 'Desmarcar' : 'Concluir'}
            </button>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
            >
              Editar
            </button>
            
            <button
              onClick={() => onDelete(id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Excluir
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskComp;
