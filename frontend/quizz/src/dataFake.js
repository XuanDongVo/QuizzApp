// export const categories = [
//     { id: 1, name: "Math", description: "Mathematics is the study of numbers, quantities, and shapes.", image: "/categories/image--biology.svg" },
//     { id: 2, name: "Science", description: "Science explores the natural world and how things work.", image: "/categories/image--biology.svg" },
//     { id: 3, name: "History", description: "History is the study of past events and civilizations.", image: "/categories/image--biology.svg" },
//     { id: 4, name: "Geography", description: "Geography deals with places, people, and the environment.", image: "/categories/image--biology.svg" },
//     { id: 5, name: "History", description: "History is the study of past events and civilizations.", image: "/categories/image--biology.svg" },
//     { id: 6, name: "Geography", description: "Geography deals with places, people, and the environment.", image: "/categories/image--biology.svg" },
//     { id: 7, name: "History", description: "History is the study of past events and civilizations.", image: "/categories/image--biology.svg" },
// ];


export const categories = [
    {
        id: 1,
        name: "Math",
        description: "Mathematics is the study of numbers, quantities, and shapes.",
        image: "/categories/image--biology.svg",
        questions: [
            {
                question: "What is the result of 12 × 8?",
                options: ["80", "96", "100", "92", "88"],
                correctAnswer: "96"
            },
            {
                question: "What is the square root of 144?",
                options: ["10", "11", "12", "13", "14"],
                correctAnswer: "12"
            },
            {
                question: "If a triangle has angles 50° and 60°, what is the third angle?",
                options: ["60°", "70°", "80°", "90°", "100°"],
                correctAnswer: "70°"
            },
            {
                question: "What is 7 cubed (7³)?",
                options: ["49", "63", "128", "343", "512"],
                correctAnswer: "343"
            },
            {
                question: "Which of the following is a prime number?",
                options: ["14", "21", "31", "49", "50"],
                correctAnswer: "31"
            }
        ]
    },
    {
        id: 2,
        name: "Science",
        description: "Science explores the natural world and how things work.",
        image: "/categories/image--biology.svg",
        questions: [
            {
                question: "What gas do plants absorb from the atmosphere?",
                options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen", "Helium"],
                correctAnswer: "Carbon Dioxide"
            },
            {
                question: "What is the chemical symbol for water?",
                options: ["O2", "CO2", "H2O", "NaCl", "CH4"],
                correctAnswer: "H2O"
            },
            {
                question: "What planet is known as the Red Planet?",
                options: ["Earth", "Venus", "Mars", "Jupiter", "Saturn"],
                correctAnswer: "Mars"
            },
            {
                question: "Which part of the human body contains the most bones?",
                options: ["Skull", "Spine", "Hand", "Foot", "Rib cage"],
                correctAnswer: "Hand"
            },
            {
                question: "Which scientist developed the theory of relativity?",
                options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei", "Marie Curie"],
                correctAnswer: "Albert Einstein"
            }
        ]
    },
    {
        id: 3,
        name: "History",
        description: "History is the study of past events and civilizations.",
        image: "/categories/image--history.svg",
        questions: [
            {
                question: "Who was the first president of the United States?",
                options: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams", "Theodore Roosevelt"],
                correctAnswer: "George Washington"
            },
            {
                question: "In what year did World War II end?",
                options: ["1945", "1939", "1918", "1950", "1960"],
                correctAnswer: "1945"
            },
            {
                question: "Which ancient civilization built the pyramids?",
                options: ["Romans", "Greeks", "Mayans", "Egyptians", "Chinese"],
                correctAnswer: "Egyptians"
            },
            {
                question: "Who discovered America in 1492?",
                options: ["Marco Polo", "Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan", "James Cook"],
                correctAnswer: "Christopher Columbus"
            },
            {
                question: "Which country was the main opponent of the USA in the Cold War?",
                options: ["China", "Germany", "USSR", "Japan", "France"],
                correctAnswer: "USSR"
            }
        ]
    },
    {
        id: 4,
        name: "Geography",
        description: "Geography deals with places, people, and the environment.",
        image: "/categories/image--geography.svg",
        questions: [
            {
                question: "Which is the largest continent on Earth?",
                options: ["Africa", "Asia", "Europe", "North America", "South America"],
                correctAnswer: "Asia"
            },
            {
                question: "What is the capital of France?",
                options: ["London", "Berlin", "Paris", "Madrid", "Rome"],
                correctAnswer: "Paris"
            },
            {
                question: "Which country has the largest population?",
                options: ["USA", "India", "China", "Brazil", "Russia"],
                correctAnswer: "China"
            },
            {
                question: "What is the longest river in the world?",
                options: ["Amazon River", "Mississippi River", "Nile River", "Yangtze River", "Danube River"],
                correctAnswer: "Nile River"
            },
            {
                question: "Which desert is the largest in the world?",
                options: ["Gobi", "Sahara", "Kalahari", "Arabian", "Antarctic"],
                correctAnswer: "Antarctic"
            }
        ]
    }
];
