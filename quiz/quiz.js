const questions = [
    {
        question: "What does CSS stands for?",
        options: ["Computing Style Sheet", "Creative Style Sheet", "Cascading Style Sheet", "Creative Styling Sheet"],
        answer: "Cascading Style Sheet"
    },
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Preprocessor", "Hyper Text Markup Language", "Hyper Text Multiple Language", "Hyper Tool Multi Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "How to print a page using Javascript?",
        options: ["window.print()", "browser.print()", "navigator.print()", "document.print()"],
        answer: "window.print()"
    },
    {
        question: "Which language runs on a web browser?",
        options: ["Java", "C", "Python", "Javascript"],
        answer: "Javascript"
    },
    {
        question: " How do you declare a javascript variable ?",
        options: ["variable carName;", "var carName;", "v carName;", "none of this"],
        answer: "var carName;"
    },
    {
        question: "How do you called a function named 'myFunction'?",
        options: ["call myFunction()", "myFunction()", "call function myFunction()"],
        answer: "myFunction()"
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        options: ['alert("Hello World")', 'alertBox("helloWorld")', 'msg("Hello World")', 'msgBox("Hello World")'],
        answer: 'alert("Hello World")'
    },
    {
        question: "What is the most used programming language in 2021?",
        options: ["Java", "C", "Python", "Javascript"],
        answer: "Javascript"
    },
    {
        question: "When JS develope?",
        options: ["1990", "1995", "1999", "1892"],
        answer: "1995"
    },
    {
        question: "Which of the following is not Css Box model property?",
        options: ["margin", "padding", "border-radius", "border-collapse"],
        answer: "border-collapse"
    }

    // Add more questions as needed
];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 60;

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById('next-btn').click(); // Move to next question when time is up
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 60;
    document.getElementById('timer').innerText = timeLeft;
    startTimer();
}

function showQuestion() {
    const questionObj = questions[currentQuestionIndex];
    document.getElementById('question').innerText = questionObj.question;
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = ''; // Clear previous options

    questionObj.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });

    resetTimer();
}

function checkAnswer(selectedOption) {
    const questionObj = questions[currentQuestionIndex];
    if (selectedOption === questionObj.answer) {
        score++;
        document.getElementById('score').innerText = `Score: ${score}`;
    }
    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        document.getElementById('next-btn').disabled = true;
    } else {
        document.getElementById('question').innerText = 'Quiz completed!';
        document.getElementById('options-container').innerHTML = '';
        document.getElementById('next-btn').style.display = 'none';
    }
}

// Initialize the quiz
showQuestion();