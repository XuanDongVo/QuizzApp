// src/pages/Dashboard.jsx
import JoinQuizSection from '../dashboard/JoinQuizSection';
import RecentActivitySection from '../dashboard/RecentActivitySection';
import QuizCategorySection from '../dashboard/QuizCategorySection';

const Dashboard = () => {
    const iceBreakerQuizzes = [
        { title: "Vòng quanh thế giới", plays: "150 plays" },
        { title: "Đúng hay sai", plays: "250K plays" },
        { title: "Làm quen với các sinh viên", plays: "32K plays" },
        { title: "Câu đố trước khi lớp bắt đầu", plays: "571 plays" },
        { title: "Có hay có kia", plays: "58K plays" },
    ];

    const mathQuizzes = [
        { title: "1 + 2 = 3", plays: "1K plays" },
        { title: "2 + 2 = 4", plays: "2K plays" },
        { title: "3 + 3 = 6", plays: "3K plays" },
        { title: "4 + 4 = 8", plays: "4K plays" },
        { title: "5 + 5 = 10", plays: "5K plays" },
    ];

    return (
        <div className="bg-gray-100 min-h-screen">
            <JoinQuizSection />
            <RecentActivitySection />
            <QuizCategorySection title="Ice breaker" quizzes={iceBreakerQuizzes} />
            <QuizCategorySection title="Mathematics" quizzes={mathQuizzes} />


        </div>
    );
};

export default Dashboard;