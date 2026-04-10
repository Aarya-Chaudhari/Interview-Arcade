const codeBox = document.getElementById("codeBox");
const explanationEl = document.getElementById("explanation");
const fixInput = document.getElementById("fixInput");

let selectedLine = null;
let index = 0;
let score = 0;

// 5 BUG SNIPPETS
const snippets = [
  {
    code: [
      "let x = 10;",
      "if(x = 5){",
      "  console.log('Equal');",
      "}"
    ],
    bug: 1,
    fix: "== or ===",
    exp: "Assignment operator '=' used instead of comparison."
  },
  {
    code: [
      "function add(a, b){",
      "  return a + b",
      "}",
      "console.log(add(2));"
    ],
    bug: 3,
    fix: "pass two arguments",
    exp: "Function expects 2 parameters but only one given."
  },
  {
    code: [
      "arr = [1,2,3];",
      "for(let i=0; i<=arr.length; i++){",
      " console.log(arr[i]);",
      "}"
    ],
    bug: 1,
    fix: "< instead of <=",
    exp: "Loop exceeds array length."
  },
  {
    code: [
      "def func():",
      " print('Hello')",
      "func"
    ],
    bug: 2,
    fix: "func()",
    exp: "Function is not called properly."
  },
  {
    code: [
      "int x = 5;",
      "if(x == '5'){",
      "System.out.println('Equal');",
      "}"
    ],
    bug: 1,
    fix: "type mismatch",
    exp: "Comparing int with string."
  }
];

function loadSnippet() {
  if (index >= snippets.length) {
    codeBox.innerHTML = `<h3>Score: ${score}/${snippets.length}</h3>`;
    explanationEl.innerText = "Completed!";
    return;
  }

  codeBox.innerHTML = "";
  explanationEl.innerText = "";
  fixInput.value = "";

  snippets[index].code.forEach((line, i) => {
    const div = document.createElement("div");
    div.classList.add("line");
    div.innerText = line;

    div.onclick = () => selectLine(i, div);

    codeBox.appendChild(div);
  });
}

function selectLine(i, el) {
  document.querySelectorAll(".line").forEach(l => l.classList.remove("selected"));
  el.classList.add("selected");
  selectedLine = i;
}

function submitAnswer() {
  const correctLine = snippets[index].bug;
  const userFix = fixInput.value.toLowerCase();

  const lines = document.querySelectorAll(".line");

  if (selectedLine === correctLine) {
    lines[selectedLine].classList.add("correct");
    score++;
  } else if (selectedLine !== null) {
    lines[selectedLine].classList.add("wrong");
    lines[correctLine].classList.add("correct");
  }

  explanationEl.innerText = "Explanation: " + snippets[index].exp;

  setTimeout(() => {
    index++;
    selectedLine = null;
    loadSnippet();
  }, 1500);
}

// INIT
loadSnippet();