import { QuizProvider } from "@/context/quizzContext";

export default function layout({ children }) {
    return (
        <QuizProvider>
            {children}
        </QuizProvider>
    );
}