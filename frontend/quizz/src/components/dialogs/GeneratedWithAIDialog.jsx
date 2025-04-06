'use client'
import { useState, useRef } from 'react'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
} from '@headlessui/react'
import { useRouter } from "next/navigation";

const GeneratedWithAIDialog = ({ open, handleClose }) => {
    const [topic, setTopic] = useState('')
    const [questionCount, setQuestionCount] = useState(10)
    const router = useRouter()

    // Refs để focus vào input khi có lỗi
    const topicRef = useRef(null)
    const countRef = useRef(null)

    const handleSubmit = () => {
        if (!topic.trim()) {
            topicRef.current?.focus()
            return
        }

        if (!questionCount || questionCount < 1 || questionCount > 10) {
            countRef.current?.focus()
            return
        }

        handleClose()
        router.push(`/quizz/pre-game-ai?topic=${topic}&questionCount=${questionCount}`)
    }

    return (
        <Dialog open={open} onClose={handleClose} className="relative z-10">
            <DialogBackdrop className="fixed inset-0 bg-gray-500/75 backdrop-blur-sm" />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <DialogPanel className="relative w-full max-w-lg transform overflow-hidden rounded-xl bg-white p-6 text-left shadow-xl transition-all">
                        <DialogTitle
                            as="h3"
                            className="text-lg font-semibold leading-6 text-gray-900 text-center"
                        >
                            Tạo câu hỏi bằng AI
                        </DialogTitle>

                        <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Chủ đề
                            </label>
                            <input
                                type="text"
                                ref={topicRef}
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                                placeholder="Ví dụ: Lịch sử Việt Nam, Toán học..."
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Số lượng câu hỏi (tối đa 10)
                            </label>
                            <input
                                type="number"
                                ref={countRef}
                                value={questionCount}
                                onChange={(e) => setQuestionCount(Number(e.target.value))}
                                min={1}
                                max={10}
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mt-5 rounded-md bg-yellow-100 p-3 text-sm text-yellow-800">
                            ⚠️ Câu hỏi được tạo bởi AI có thể không hoàn toàn chính xác. Vui lòng sử dụng với mục đích tham khảo và kiểm tra lại nội dung trước khi sử dụng.
                        </div>

                        <div className="mt-6 flex justify-end gap-3">
                            <button
                                type="button"
                                onClick={handleClose}
                                className="rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300"
                            >
                                Hủy
                            </button>
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                            >
                                Tạo câu hỏi
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}

export default GeneratedWithAIDialog
