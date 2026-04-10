// storage.js

export function saveScore(module, score) {
    let data = JSON.parse(localStorage.getItem("scores")) || {};
    data[module] = score;
    localStorage.setItem("scores", JSON.stringify(data));
}

export function getScore(module) {
    let data = JSON.parse(localStorage.getItem("scores")) || {};
    return data[module] || 0;
}

export function markCompleted(module) {
    let completed = JSON.parse(localStorage.getItem("completed")) || [];
    if (!completed.includes(module)) {
        completed.push(module);
    }
    localStorage.setItem("completed", JSON.stringify(completed));
}