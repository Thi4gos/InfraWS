import React, { useState } from 'react';

interface TaskProps {
  id: number;
  title: string;
  description: string;
  onEdit: (id: number, title: string, description: string) => void;
}


const TaskComp: React.FC<TaskProps> = ({ id, title, description, onEdit }) => {
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
      className={`border rounded-lg p-4 my-2 ${
        isCompleted ? 'bg-black' : 'bg-red-600'
      }`}
    >
      {isEditing ? (
        <>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="border px-2 py-1 mb-1 w-full"
          />
          <textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            className="border px-2 py-1 w-full"
          />
          <button onClick={handleSave} className="bg-green-500 text-white px-2 py-1 mt-2 mr-2 rounded">
            Salvar
          </button>
          <button onClick={() => setIsEditing(false)} className="bg-gray-500 text-white px-2 py-1 mt-2 rounded">
            Cancelar
          </button>
        </>
      ) : (
        <>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="mt-2 flex gap-2">
            <button onClick={handleComplete} className="bg-blue-400 text-white px-2 py-1 rounded">
              {isCompleted ? 'Desmarcar' : 'Concluir'}
            </button>
            <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white px-2 py-1 rounded">
              Editar
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskComp;