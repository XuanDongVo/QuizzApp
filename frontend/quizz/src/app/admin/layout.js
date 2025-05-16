import { CreatedQuizzProvider } from "@/context/createdQuizzContext";

export default function layout({ children }) {
    return (
        <CreatedQuizzProvider>
            {children}
        </CreatedQuizzProvider>
    );
}