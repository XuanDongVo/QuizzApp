'use client';
import React, { useState } from 'react';
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
} from '@headlessui/react';
import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import { useCreatedQuizzContext } from '@/context/createdQuizzContext';
import { updateQuizzPublishStatus } from '@/serivce/quizz';

const QuizzHeader = () => {
    const { quizz, setQuizz } = useCreatedQuizzContext();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const router = useRouter();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    const handleBack = () => {
        router.back();
    };

    const handlePreview = () => {
        router.push('preview');
    }

    {/* 2.1.36 QuizzHeader thực hiện hàm togglePublish để thực hiện lưu lại quizz cho người dùng. */ }
    const togglePublish = async () => {
        const newPublishStatus = !quizz?.publish;
        {/* 2.1.37 QuizzHeader gọi hàm updateQuizzPublishStatus để cập nhật trạng thái publish của quizz. */ }
        const response = await updateQuizzPublishStatus(quizz?._id, newPublishStatus);
        if (response.status === 200) {
            {/*2.1.42	QuizzHeader cập nhật lại trạng thái Quizz của người dùng để biết quizz này đang được publish hay chưa publish. */ }
            setQuizz({ ...quizz, publish: newPublishStatus });
        } else {
            console.error('Failed to update publish status:', response.statusText);
        }
    };

    return (
        <>
            <div className="flex justify-between items-center  bg-white p-3">
                <div className="flex items-center space-x-3">
                    <button
                        onClick={handleBack}
                        className="px-2 py-1  hover:bg-gray-300 hover:cursor-pointer rounded transition text-sm font-semibold border-2"
                    >
                        <ChevronLeft />
                    </button>
                    <h1 className="text-2xl font-bold">{quizz?.name}</h1>
                </div>
                <div className="space-x-2">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded transition"
                    >
                        SETTINGS
                    </button>
                    <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded transition" onClick={handlePreview}>
                        PREVIEW
                    </button>

                    {/* 2.1.35 Người dùng nhấn button 'PUBLISH' ở QuizzHeader để lưu quizz và hiển thị quizz ra cho người dùng khác có thể làm.*/}
                    <button
                        onClick={togglePublish}
                        className={`px-4 py-2 rounded transition font-semibold ${quizz?.publish
                            ? 'bg-purple-400 text-white hover:bg-purple-500'
                            : 'bg-[#8854c0] text-white hover:bg-[#7a49b0]'
                            }`}
                    >
                        {quizz?.publish ? 'UNPUBLISH' : 'PUBLISH'}
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
                                        placeholder="Untitled Quiz" value={quizz?.name || ""}
                                        onChange={(e) => setQuizInfo({ ...quizz, name: e.target.value })}
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