
const quizData = [

    {
        question: "What are the major languages spoken in Andhra Pradesh?",
        a: "English and Telugu",
        b: "Telugu and Urdu",
        c: "Telugu and Kannada",
        d: "All of the above languages",
        correct: "b",
    },
    {
        question: "What is the state flower of Haryana?",
        a: "Lily",
        b: "Rose",
        c: "Golden Shower",
        d: "Lotus",
        correct: "d",
    },
    {
        question: "Which of the following states is not located in the North?",
        a: "Jharkhand",
        b: "Jammu and Kashmir",
        c: "Himachal Pradesh",
        d: "Haryana",
        correct: "a",
    },
    {
        question: "In which state is the main language Khasi?",
        a: "Nagaland",
        b: "Meghalaya",
        c: "Tripura",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Which is the largest coffee producing state of India?",
        a: "Karnataka",
        b: "Kerala",
        c: "Tamil Nadu",
        d: "Arunachal Pradesh",
        correct: "a",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Your Total Score Is ${score}/${quizData.length}</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});