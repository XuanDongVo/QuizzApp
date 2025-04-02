// file này để insert dữ liệu fake

// Dữ liệu mẫu về các môn học
const subjectDocuments = [
    {
        name: "Toán học",
        description: "Môn học về các con số, phép tính và logic.",
        createdDate: new Date("2025-01-15")
    },
    {
        name: "Vật lý",
        description: "Nghiên cứu các hiện tượng tự nhiên và định luật vật lý.",
        createdDate: new Date("2025-02-10")
    },
    {
        name: "Lập trình",
        description: "Học cách viết mã và phát triển phần mềm.",
        createdDate: new Date("2025-03-01")
    },
    {
        name: "Văn học",
        description: "Khám phá các tác phẩm văn học và kỹ năng phân tích.",
        createdDate: new Date("2025-03-20")
    }
];

module.exports = { subjectDocuments };
