import React from 'react';
import QuestionItem from './QuestionItem';

const QuestionList = ({ questions, onEdit, onDelete }) => {
  return (
    <div className="space-y-4">
      {questions.map((question, index) => (
        <QuestionItem
          key={question.id || index}
          question={question}
          onEdit={() => onEdit(question)}
          onDelete={() => onDelete(question)}
        />
      ))}
    </div>
  );
};

export default QuestionList;
