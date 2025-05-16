'use client';
import React, { useState } from 'react';
import {
  ChevronDown,
  Tag,
  Eye,
  ChevronLeft,
} from 'lucide-react';
const QuestionEditorHeader = ({ handleSavedQuestion, handleBack }) => {
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#000000');

  const colors = [
    '#000000',
    '#FF0000',
    '#00FF00',
    '#0000FF',
    '#FFFF00',
    '#FF00FF',
  ];

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setIsColorPickerOpen(false);
    alert(`Đã chọn màu: ${color}`);
    console.log('Màu đã chọn:', color);
  };

  const handleSaveQuestion = () => {
    handleSavedQuestion();
  };

  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-t-lg">
      {/* Bên trái: Nút Back */}
      <div className="flex items-center space-x-2 w-10 h-10">
        <button
          onClick={handleBack}
          className="px-2 py-1 hover:bg-gray-300 hover:cursor-pointer rounded transition text-sm font-semibold border-2"
        >
          <ChevronLeft />
        </button>
      </div>

      {/* Giữa: Các công cụ chỉnh sửa */}
      <div className="flex items-center space-x-2">
        {/* Nút A (Chọn màu chữ) */}
        <div className="relative">
          <button
            onClick={() => setIsColorPickerOpen(!isColorPickerOpen)}
            className="flex items-center justify-center w-10 h-10 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            <span className="text-sm font-bold">A</span>
            {/* Thanh màu nhỏ hiển thị màu đã chọn */}
            <div
              className="absolute bottom-0 h-1 w-full"
              style={{ backgroundColor: selectedColor }}
            />
          </button>

          {/* Color Picker Dropdown */}
          {isColorPickerOpen && (
            <div className="absolute top-12 right-0 z-10 bg-white border border-gray-300 rounded-md w-28 p-2">
              <div className="grid grid-cols-3 gap-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => handleColorChange(color)}
                    className="w-6 h-6 rounded-md border border-gray-200 hover:border-gray-400"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Nút Bold */}
        <button className="flex items-center justify-center w-10 h-10 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
          <span className="text-sm font-bold">B</span>
        </button>

        {/* Nút Italic */}
        <button className="flex items-center justify-center w-10 h-10 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
          <span className="text-sm italic">I</span>
        </button>

        {/* Nút Underline */}
        <button className="flex items-center justify-center w-10 h-10 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
          <span className="text-sm underline">U</span>
        </button>

        {/* Nút Insert Equation */}
        <button className="flex items-center justify-center w-10 h-10 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
          <span className="text-sm">∑</span>
        </button>

        {/* Nút Tag Topics */}
        <button className="flex items-center space-x-1 px-3 py-1 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
          <Tag className="h-4 w-4 text-gray-500" />
          <span className="text-sm">Tag topics</span>
        </button>
      </div>

      {/* Bên phải: Nút Save Question */}
      <div className="flex items-center space-x-2">
        <button
          onClick={handleSaveQuestion}
          className="flex items-center space-x-1 px-4 py-2 bg-[var(--background-primary)] text-white rounded-md hover:bg-[var(--background-primary)]/80 hover:cursor-pointer"
        >
          <span className="text-sm">Save question</span>
        </button>
      </div>
    </div>
  );
};

export default QuestionEditorHeader;