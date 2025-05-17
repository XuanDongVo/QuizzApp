import React from 'react';

const QuestionItem = ({ question, onEdit, onDelete }) => {
  return (
    <div className="p-4 border rounded shadow-sm bg-white flex justify-between items-center">
      <div>
        <p className="font-semibold">{question.content}</p>
        <p className="text-sm text-gray-500">Type: {question.type}</p>
      </div>
      <div className="space-x-2">
        <button onClick={onEdit} className="text-blue-500 hover:underline">Edit</button>
        <button onClick={onDelete} className="text-red-500 hover:underline">Delete</button>
      </div>
    </div>
  );
};

export default QuestionItem;
