import React, { useState, useEffect } from 'react';

const QuestionForm = ({ initialData = {}, onSave }) => {
  const [content, setContent] = useState('');
  const [type, setType] = useState('multiple_choice');

  useEffect(() => {
    if (initialData) {
      setContent(initialData.content || '');
      setType(initialData.type || 'multiple_choice');
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ content, type });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-semibold">Question Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block font-semibold">Question Type</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option value="multiple_choice">Multiple Choice</option>
          <option value="true_false">True/False</option>
          <option value="short_answer">Short Answer</option>
        </select>
      </div>

      <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">
        Save
      </button>
    </form>
  );
};

export default QuestionForm;
