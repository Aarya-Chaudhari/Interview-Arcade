const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const explanationEl = document.getElementById("explanation");
const progressEl = document.getElementById("progress");
const timerEl = document.getElementById("timer");

const quizBox = document.getElementById("quizBox");
const resultBox = document.getElementById("resultBox");

let questions = [
  {
    q: "Find next number: 2, 6, 12, 20, ?",
    options: ["30", "28", "26", "32"],
    answer: 0,
    exp: "Pattern: n(n+1) → 5×6 = 30"
  },
  {
    q: "If A=1, B=2, what is CAT?",
    options: ["24", "26", "25", "27"],
    answer: 0,
    exp: "C(3)+A(1)+T(20) = 24"
  },
  {
    q: "Odd one out",
    options: ["2", "3", "5", "9"],
    answer: 3,
    exp: "9 is not prime"
  },
  {
    q: "Mirror of 6?",
    options: ["9", "6", "3", "0"],
    answer: 0,
    exp: "Mirror flips → 9"
  },
  {
    q: "Speed = Distance / ?",
    options: ["Time", "Velocity", "Mass", "Force"],
    answer: 0,
    exp: "Basic formula"
  }
];

let index = 0;
let score = 0;
let timer;
let timeLeft = 10;

function loadQuestion() {
  if (index >= questions.length) return showResult();

  const q = questions[index];

  questionEl.innerText = q.q;
  progressEl.innerText = `Q${index+1}/${questions.length}`;
  explanationEl.innerText = "";

  optionsEl.innerHTML = "";

  q.options.forEach((opt, i) => {
    const div = document.createElement("div");
    div.classList.add("option");
    div.innerText = opt;

    div.onclick = () => checkAnswer(i);

    optionsEl.appendChild(div);
  });

  startTimer();
}

function startTimer() {
  timeLeft = 10;
  timerEl.innerText = `${timeLeft}s`;

  clearInterval(timer);

  timer = setInterval(() => {
    timeLeft--;
    timerEl.innerText = `${timeLeft}s`;

    if (timeLeft === 0) {
      clearInterval(timer);
      showExplanation(false);
    }
  }, 1000);
}

function checkAnswer(selected) {
  clearInterval(timer);

  const correct = questions[index].answer;

  if (selected === correct) {
    score++;
    nextQuestion();
  } else {
    showExplanation(true);
  }
}

function showExplanation(wrong) {
  const q = questions[index];
  explanationEl.innerText = "Explanation: " + q.exp;

  setTimeout(() => {
    nextQuestion();
  }, 1500);
}

function nextQuestion() {
  index++;
  loadQuestion();
}

function showResult() {
  quizBox.style.display = "none";
  resultBox.style.display = "block";

  document.getElementById("scoreText").innerText =
    `Your Score: ${score}/${questions.length}`;

  let performance = "";

  if (score === questions.length) performance = "Excellent 🔥";
  else if (score >= 3) performance = "Good 👍";
  else performance = "Needs Improvement 📘";

  document.getElementById("performance").innerText = performance;
}

function restartQuiz() {
  index = 0;
  score = 0;
  quizBox.style.display = "block";
  resultBox.style.display = "none";
  loadQuestion();
}

// INIT
loadQuestion();