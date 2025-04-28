'use client';
import React, { useState } from 'react';
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
} from '@headlessui/react';

const QuizzHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    return (
        <>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">UNTITLED QUIZ</h1>
                <div className="space-x-2">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded transition"
                    >
                        SETTINGS
                    </button>
                    <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded transition">
                        PREVIEW
                    </button>
                    <button className="px-4 py-2 bg-[#8854c0] text-white rounded hover:bg-[#7a49b0] transition">
                        PUBLISH
                    </button>
                </div>
            </div>

            {/* Settings Dialog */}
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <DialogBackdrop className="fixed inset-0 bg-black/40" />

                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <DialogPanel className="w-full max-w-4xl rounded-xl bg-white p-6 shadow-xl">
                        <DialogTitle className="text-xl font-bold mb-4 text-center">
                            Quiz settings
                        </DialogTitle>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                {/* Name input */}
                                <div>
                                    <label className="block font-semibold">Name</label>
                                    <input
                                        className="w-full border rounded px-4 py-2 mt-1 border-red-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        placeholder="Untitled Quiz"
                                    />
                                    <p className="text-red-500 text-sm mt-1">
                                        Name should be at least 4 characters long
                                    </p>
                                </div>

                                {/* Subject */}
                                <div>
                                    <label className="block font-semibold">Subject</label>
                                    <select
                                        className="w-full border rounded px-4 py-2 mt-1 border-red-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    >
                                        <option value="">Select relevant subject</option>
                                    </select>
                                    <p className="text-red-500 text-sm mt-1">
                                        Please select the subject
                                    </p>
                                </div>

                                {/* Grade */}
                                <div>
                                    <label className="block font-semibold">Grade</label>
                                    <select className="w-full border rounded px-4 py-2 mt-1">
                                        <option>11th Grade</option>
                                    </select>
                                </div>

                                {/* Language */}
                                <div>
                                    <label className="block font-semibold">Language</label>
                                    <select className="w-full border rounded px-4 py-2 mt-1">
                                        <option>English</option>
                                    </select>
                                </div>

                                {/* Visibility */}
                                <div>
                                    <label className="block font-semibold">Visibility</label>
                                    <select className="w-full border rounded px-4 py-2 mt-1">
                                        <option>Publicly visible</option>
                                    </select>
                                </div>
                            </div>

                            {/* Image Upload Section */}
                            <div className="flex items-center justify-center">
                                <label className="w-full h-64 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-purple-400 transition">
                                    {selectedImage ? (
                                        <img
                                            src={selectedImage}
                                            alt="Cover"
                                            className="h-full object-contain rounded"
                                        />
                                    ) : (
                                        <>
                                            <div className="text-4xl text-gray-400 mb-2">+</div>
                                            <span className="text-gray-600">Add cover image</span>
                                        </>
                                    )}
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="hidden"
                                    />
                                </label>
                            </div>
                        </div>

                        {/* Save Button */}
                        <div className="flex justify-end mt-6">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="px-4 py-2 bg-[#8854c0] text-white rounded hover:bg-[#7a49b0] transition"
                            >
                                Save
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    );
};

export default QuizzHeader;
